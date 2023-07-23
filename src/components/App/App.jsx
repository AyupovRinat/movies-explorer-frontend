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

  return (
    <div className='app'>
      <Routes>
        <Route path='/' loggedIn={loggedIn} element={<Main />} />
        <Route path='/movies' loggedIn={loggedIn} element={<Movies />} />
        <Route path='/saved-movies' loggedIn={loggedIn} element={<SavedMovies />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/profile' loggedIn={loggedIn} element={<Profile />} />
        <Route path='*' element={<NotFound onBack={goBack} />} />
      </Routes>
    </div>
  );
}

export default App;
