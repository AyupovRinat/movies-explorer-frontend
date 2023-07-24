import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import './App.css';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  function handleLogin() {
    setLoggedIn(true);
    navigate('/movies');
  }

  function handleRegister() {
    setLoggedIn(true);
    navigate('/signin');
  }

  function handleSingOut() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route path='/movies' element={<Movies loggedIn={loggedIn} />} />
        <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        <Route path='/signup' element={<Register onRegister={handleRegister} />} />
        <Route path='/profile' element={<Profile loggedIn={loggedIn} onSignOut={handleSingOut} />} />
        <Route path='*' element={<NotFound onBack={goBack} />} />
      </Routes>
    </div>
  );
}

export default App;
