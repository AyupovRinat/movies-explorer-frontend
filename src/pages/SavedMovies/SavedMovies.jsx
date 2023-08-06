import './SavedMovies.css';
import MoviePage from '../../components/MoviePage/MoviePage';

function SavedMovies(props) {
  return (
    <MoviePage
      {...props}
      showMoreMoviesButton={false}
    />
  )
};

export default SavedMovies;
