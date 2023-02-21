import { Form } from 'components/Form/Form';
import { MovieList } from 'components/MovieList.jsx/MovieList';
import { useEffect, useState } from 'react';
// import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovie } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const serchQuery = searchParams.get('title');

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      try {
        const { results } = await getSearchedMovie(serchQuery);
        const filteredResults = results.map(({ title, id }) => ({ title, id }));
        setMovies(filteredResults);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchedMovies();
  }, [serchQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ title: query });
  };

  return (
    <div>
      <Form handleFormSubmit={handleFormSubmit} />
      <MovieList moviesList={movies} />
    </div>
  );
};

export default Movies;
