import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoutes from '../../customHooks/ProtectedRoutes';
import mainApi from '../../utils/mainApi';
import { MOVIES_URL, serverMesages } from '../../utils/constants';
import { getMovies } from '../../utils/MoviesApi';


function App() {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [serverMessage, setServerMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  
  const resetServerMessage = () => setServerMessage('');

  const handleAuthError = (status) => {
    if (status === 401) {
      setIsLoggedIn(false);
    }
    setIsLoading(false);
    console.log(status);
  };

  const handleUserError = (status) => {
    if (status === 400) return setServerMessage(serverMesages.validatinError);
    if (status === 401) return setServerMessage(serverMesages.invalidLoginData);
    if (status === 409) return setServerMessage(serverMesages.doubleEmail);
    if (status === 500) return setServerMessage(serverMesages.internalError);
    setServerMessage(serverMesages.apocalyptoError);
  }

  
  const handleSaveMovie = (movie) => {
    mainApi.postMovie(movie)
      .then((movie) => setUserMovies([movie, ...userMovies]))
      .catch(handleAuthError);
  };
  
  const handleDeleteMovie = (deletingMovie) => {
    const id = deletingMovie._id ? deletingMovie._id : userMovies.find(userMovie => userMovie.movieId === deletingMovie.movieId)._id;
    mainApi.deleteMovie(id)
      .then((m) => setUserMovies(userMovies.filter(m => m._id !== id)))
      .catch(handleAuthError);
  };

 
  const checkIsSaved = (movie) => userMovies.some((userMovie) => userMovie.movieId === movie.movieId);

  const getReadyMoviesArray = (badMovies) => badMovies.map(badMovie => Object.assign({
    nameRU: badMovie.nameRU,
    nameEN: badMovie.nameEN,
    image: `${MOVIES_URL}${badMovie.image.url}`,
    duration: badMovie.duration,
    trailerLink: badMovie.trailerLink,
    description: badMovie.description,
    country: badMovie.country,
    movieId: badMovie.id,
    thumbnail: `${MOVIES_URL}${badMovie.image.formats.thumbnail.url}`,
    director: badMovie.director,
    year: badMovie.year,
  }));

  const pullAllMovies = () => {
    return getMovies().then((badMovies) => {
      const readyMovies = getReadyMoviesArray(badMovies);
      localStorage.setItem('movies', JSON.stringify(readyMovies))
      setMovies(readyMovies);
    })
    // .catch(() => вывести текст что сервер фильмов упал())
  }

  const handleCheckToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return setIsLoading(false);
    mainApi.setToken(token);
    mainApi.getUser()
      .then((res) => setIsLoggedIn(true))
      .catch(handleAuthError)
  };

  const handleLogin = (userData) => {
    return mainApi.login(userData).then(({ token }) => {
      resetServerMessage('');
      setIsLoggedIn(true);
      mainApi.setToken(token);
      localStorage.setItem('token', token);
      navigate('/movies', { replace: true });
    })
      .catch(handleUserError);
  };

  const handleRegister = ({ name, password, email }) => {
    return mainApi.register({ name, password, email })
      .then((res) => handleLogin({ password, email }))
      .catch(handleUserError);
  };

  const handleUpdate = (userData) => {
    return mainApi.patchUser(userData)
      .then((res) => {
        setServerMessage(serverMesages.successUpdateUser);
        setCurrentUser(res)
      })
      .catch(handleUserError);
  };

  const handleSingOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({ email: '', name: '' });
    setMovies([]);
    setUserMovies([]);
    localStorage.clear();
    mainApi.setToken(null);
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    Promise.all([mainApi.getUser(), mainApi.getMovies()])
      .then(([userData, moviesList]) => {
        setCurrentUser(userData.data);
        setUserMovies(moviesList);
        setIsLoading(false);
        setMovies(JSON.parse(localStorage.getItem('movies')) ?? movies);        
      })
      .catch(handleAuthError);
  }, [isLoggedIn]);

  useEffect(handleCheckToken, []);

  if (isLoading) return (<p className="loader">Загрузка...</p>)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/signin' element={<Login isLoggedIn={isLoggedIn} serverMessage={serverMessage} onLogin={handleLogin} />} />
          <Route path='/signup' element={<Register isLoggedIn={isLoggedIn} serverMessage={serverMessage} onRegister={handleRegister} />} />
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />} >
            <Route
              path='/movies'
              element={
                <Movies
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                  pullAllMovies={pullAllMovies}
                  checkIsSaved={checkIsSaved}
                  onSave={handleSaveMovie}
                  onDelete={handleDeleteMovie}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  movies={userMovies}
                  onDelete={handleDeleteMovie}
                />
              }
            />
            <Route path='/profile' element={
              <Profile isLoggedIn={isLoggedIn} onSave={handleUpdate} serverMessage={serverMessage} resetMessage={resetServerMessage} onSignOut={handleSingOut} />
            } />
            <Route path='*' element={<NotFound onBack={goBack} />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
