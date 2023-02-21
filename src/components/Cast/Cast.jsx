import PropTypes from 'prop-types';
import { getActorsInfo } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const id = Number(movieId);

  useEffect(() => {
    const getActors = async () => {
      setIsLoading(true);
      try {
        const { cast } = await getActorsInfo(id);
        setActors(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, [id]);

  const BASE_URL_FOR_IMAGES = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <ul className={css.list}>
        {actors.length > 0
          ? actors.map(item => (
              <li key={item.cast_id} className={css.item}>
                <img
                  className={css.img}
                  src={BASE_URL_FOR_IMAGES + item.profile_path}
                  alt={item.name}
                />
                <span>{item.name}</span>
                <span>
                  Character: {item.character ? item.character : 'Unknown'}
                </span>
              </li>
            ))
          : 'There are no information about actors'}
      </ul>
    </>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
