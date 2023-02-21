import { useEffect, useState } from 'react';
import { trendingMoviesFetch } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList.jsx/MovieList';

const Home = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await trendingMoviesFetch();
        const filteredResults = results.map(({ title, id }) => ({ title, id }));
        setTrandingMovies(filteredResults);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <ul>
        <MovieList moviesList={trendingMovies} />
      </ul>
    </div>
  );
};

export default Home;