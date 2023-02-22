import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import { Details } from '../../components/Details/Details';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
// import PropTypes from 'prop-types';

const MovieDetails = () => {
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const id = Number(movieId);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieInfo(id);
        setMovieInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieInfo();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <GoBackBtn />
      <Details movieInfo={movieInfo} />
      <ul className={css.list}>
        <li>
          <Link state={{ from: location.state?.from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from: location.state?.from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
// MovieDetails.propTypes = {
//   movieId: PropTypes.string.isRequired,
// };
