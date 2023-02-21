import css from './Details.module.css';
// import PropTypes from 'prop-types';

export const Details = ({ movieInfo }) => {
  if (movieInfo.length === 0) {
    return;
  }
  const getGenres = array => {
    return array.map(({ name }) => name).join(' ');
  };

  const year = new Date(movieInfo.release_date).getFullYear();

  const getVote = vote => {
    return Math.round(vote * 10);
  };

  const BASE_URL_FOR_IMAGES = 'https://image.tmdb.org/t/p/w500';
  const { poster_path, title, overview, vote_average, genres } = movieInfo;
  return (
    <div className={css.constainer}>
      <div className={css.imgContainer}>
        <img
          className={css.img}
          src={BASE_URL_FOR_IMAGES + poster_path}
          alt={title}
        />
      </div>
      <div className={css.info}>
        <h1>
          {title}
          <span>({year})</span>
        </h1>
        <span>User score: {getVote(vote_average)}%</span>
        <h2>Overview</h2>
        <span>{overview}</span>
        <h3>Genres</h3>
        <span>{getGenres(genres)}</span>
      </div>
    </div>
  );
};

// Details.propTypes = {
//   movieInfo: PropTypes.object.isRequired,
// };
