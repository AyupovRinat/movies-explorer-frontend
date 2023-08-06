import './Movies.css';
import MoviePage from '../../components/MoviePage/MoviePage';
import { useEffect, useState } from 'react';
import { ADD_COUNT, SCREEN_WIDTH, START_MOVIES_NUMBERS, movieAdvice } from '../../utils/constants';
import useWidth from '../../customHooks/useWidth.js';

function Movies({ pullAllMovies, ...props }) {
	const [isMoviePreloader, setIsMoviePreloader] = useState(false);
	const [addMoreMoviesNumbers, setAddMoreMoviesNumbers] = useState(0);
	const [startMoviesNumbers, setStartMoviesNumbers] = useState(0);
  const [displayedMoviesNumbers, setDisplayedMoviesNumbers] = useState(0)
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [findedMovies, setFindedMovies] = useState([])
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [searchMessage, setSearchMessage] = useState(movieAdvice.enterKeyword);
  
  
  const [showMoreMoviesButton, setShowMoreMoviesButton] = useState(true);
  const [showMovieAdvice, setShowMoviesAdvice] = useState(false);

  const width = useWidth();

  const giveMovieAdvice = (text) => setSearchMessage(text);

  const handleFirstSearch = () => {
    setIsMoviePreloader(true);
    pullAllMovies()
      .then(() => setIsFirstSearch(false))
      .catch(() => {
        setIsFirstSearch(true);
        giveMovieAdvice(movieAdvice.moviesDbError);
      })
      .finally(() => setIsMoviePreloader(false));
  };

  const setMovies = (movies=[]) => setFindedMovies(movies); // передаю и сохраняю найденные фильмы

  const handleAddMoreMovies = () => {
    const movieLack = displayedMoviesNumbers % addMoreMoviesNumbers;

    if (movieLack !== 0) {
      setDisplayedMoviesNumbers(displayedMoviesNumbers + (addMoreMoviesNumbers - movieLack));
      return;
    }
    setDisplayedMoviesNumbers(displayedMoviesNumbers + addMoreMoviesNumbers);
  };

  // когда меняется массив найденных фильмов, меня. колличество найденных фильмов на начальное для текущей шиоины экрана
  useEffect(() => setDisplayedMoviesNumbers(startMoviesNumbers), [findedMovies]);
  

  useEffect(() => {
    setDisplayedMovies(findedMovies.slice(0, displayedMoviesNumbers))
  }, [findedMovies, displayedMoviesNumbers])

  useEffect(() => {
    if (width >= SCREEN_WIDTH.L) {
      setAddMoreMoviesNumbers(ADD_COUNT.L);
      setStartMoviesNumbers(START_MOVIES_NUMBERS.L);
      return;
    } else if (width >= SCREEN_WIDTH.M ) {
      setStartMoviesNumbers(START_MOVIES_NUMBERS.M);
    } else {
      setStartMoviesNumbers(START_MOVIES_NUMBERS.S);
    }
    setAddMoreMoviesNumbers(ADD_COUNT.M);
  }, [width]);

  useEffect(() => {
    setIsFirstSearch(JSON.parse(localStorage.getItem('previousFirst'))?.first ?? isFirstSearch); 
  }, []);




  useEffect(() => { // show or hide more button
    setShowMoreMoviesButton(displayedMovies.length === findedMovies.length);
    setShowMoviesAdvice(displayedMovies.length === 0);
  }, [findedMovies, displayedMovies, displayedMoviesNumbers]);

  return (
    <MoviePage
      {...props}
      isFirstSearch={isFirstSearch}
      onFirstSearch={handleFirstSearch}
      onMoreMovies={handleAddMoreMovies}
      isMoviePreloader={isMoviePreloader}
      searchMessage={searchMessage}
      displayedMovies={displayedMovies}
      showMoreMoviesButton={!showMoreMoviesButton}
      showMovieAdvice={showMovieAdvice}
      setMovies={setMovies}
      giveMovieAdvice={giveMovieAdvice}
    />
  );
};

export default Movies;
