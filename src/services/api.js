import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRANDING_URL = 'trending/movie/day';
const SEARCH_URL = 'search/movie';
const API_KEY = 'a40e5d81f1df224d1622e425c6565c72';

export const trendingMoviesFetch = async () => {
  const { data } = await axios.get(`${BASE_URL}${TRANDING_URL}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getSearchedMovie = async searchedQuery => {
  const { data } = await axios.get(`${BASE_URL}${SEARCH_URL}`, {
    params: {
      query: searchedQuery,
      api_key: API_KEY,
    },
  });
  return data;
};

export const getMovieInfo = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getActorsInfo = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
// export const pixabayApi = async (query, pageToFind) => {
//     const { data } = await axios.get(`https://pixabay.com/api/`, {
//       params: {
//         image_type: 'photo',
//         safesearch: 'true',
//         orientation: 'horizontal',
//         page: pageToFind,
//         q: query,
//         per_page: 12,
//         key: '32848509-cba45cf412629684caa169d48',
//       },
//     });
//     return data;
//   };
