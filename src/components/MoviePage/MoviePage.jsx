import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { SHORT_MOVIE_LENGTH, movieAdvice, validationMoviesInputParams } from "../../utils/constants";
import useInput from "../../customHooks/useValidation";

function MoviePage({isLoggedIn, movies, displayedMovies, setMovies, onFirstSearch, isFirstSearch, giveMovieAdvice, ...props }) {
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [findedMovies, setFindedMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);

	const { pathname } = useLocation();

  const searchInput = useInput('', validationMoviesInputParams);

	const handleCheck = () => setIsShortMovies(!isShortMovies)

	const showShortMovies = (newFilteredMovies) => {
		return newFilteredMovies.filter(curentMovie => curentMovie.duration <= SHORT_MOVIE_LENGTH)
	}

	const findMovies = (value, isShort) => {
		const newFindedMovies = movies.filter((movie) => movie.nameEN.toLowerCase().includes(value.toLowerCase())
			|| movie.nameRU.toLowerCase().includes(value.toLowerCase()));
		setFindedMovies(newFindedMovies);

		if (pathname === '/movies') {
			localStorage.setItem('previousResult', JSON.stringify(newFindedMovies));
			localStorage.setItem('previousInput', searchInput.value);
			localStorage.setItem('previousCheckbox', JSON.stringify({isShortMovies}))
			localStorage.setItem('previousFirst', JSON.stringify({first: false}))
		}
		if(isShort) return showShortMovies(newFindedMovies);
		return newFindedMovies;
	}


	const filterMovies = () => {
		if (pathname === '/movies' && searchInput.value.trim().length === 0) {
			giveMovieAdvice(movieAdvice.enterKeyword);
			return;
		}

		if (isFirstSearch && pathname === '/movies') {
			onFirstSearch();
			return;
		}
		const newFilteredMovies = findMovies(searchInput.value, isShortMovies);
		setFilteredMovies(newFilteredMovies);
  };

	useEffect(() => {
		if (isFirstSearch) return;
		const newFilteredMovies = findMovies(searchInput.value, isShortMovies);
		setFilteredMovies(newFilteredMovies);
	}, [movies]);

	useEffect(() => {
		// идёт фильтрация короткого метра по чекбоксу, но не поиск
		if (isFirstSearch) return;
		if (pathname === '/movies') localStorage.setItem('previousCheckbox', JSON.stringify({isShortMovies}));
		const newFilteredMovies =  isShortMovies ? showShortMovies(findedMovies) : findedMovies;
		setFilteredMovies(newFilteredMovies);
	}, [isShortMovies])

	useEffect(() => {
		if (pathname !== '/movies') return;
		if (!isFirstSearch && displayedMovies.length === 0) {
      giveMovieAdvice(movieAdvice.notFound);
    }
		setMovies(filteredMovies);
	}, [filteredMovies])

	useEffect(() => {
		if (pathname === '/movies') {
			searchInput.reset(localStorage.getItem('previousInput') ?? '');
			setFindedMovies(JSON.parse(localStorage.getItem('previousResult')) ?? filteredMovies);
			setIsShortMovies(JSON.parse(localStorage.getItem('previousCheckbox'))?.isShortMovies ?? isShortMovies);
			return;
		}
		filterMovies();

		}, [])

	return (
		<>
      <Header isLoggedIn={isLoggedIn}/>
      <main className='movies'>
        <SearchForm input={searchInput} checkbox={isShortMovies} onCheck={handleCheck} onSubmit={filterMovies} />
        <MoviesCardList
					filteredMovies={displayedMovies ? displayedMovies : filteredMovies}
					{...props }
				/>
      </main>
      <Footer />
    </>
	)
}

export default MoviePage;
