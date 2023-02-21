import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import PropTypes from 'prop-types';

export const MovieList = ({ moviesList }) => {
  return (
    <ul>
      <MovieListItem moviesList={moviesList} />
    </ul>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.array.isRequired
}