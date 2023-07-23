import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SavedMovies.css';

function SavedMovies({ loggedIn }) {
  return (
    <>
     <Header loggedIn={!loggedIn} />
      <main className='savedmovies'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
