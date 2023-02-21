import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieListItem = ({ moviesList }) => {
    const location = useLocation();
  return (
    <>
      {moviesList?.map(movie => (
        <li key={movie.id}>
          <Link to={`/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};

MovieListItem.propTypes = {
    moviesList: PropTypes.array.isRequired
  }