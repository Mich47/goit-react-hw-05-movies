import axios from 'axios';

const APIKey = 'e0e51fe83e5367383559a53110fae0e8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios('trending/movie/day', {
    params: {
      api_key: APIKey,
      page,
    },
  });

  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios('search/movie', {
    params: {
      api_key: APIKey,
      query,
      page,
    },
  });

  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios(`movie/${movie_id}`, {
    params: {
      api_key: APIKey,
    },
  });

  return data;
};

export const getMovieTrailers = async movie_id => {
  const { data } = await axios(`movie/${movie_id}/videos`, {
    params: {
      api_key: APIKey,
    },
  });

  return data;
};

export const getGenres = async () => {
  const { data } = await axios('genre/movie/list', {
    params: {
      api_key: APIKey,
    },
  });

  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await axios(`movie/${movie_id}/credits`, {
    params: {
      api_key: APIKey,
    },
  });

  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await axios(`movie/${movie_id}/reviews`, {
    params: {
      api_key: APIKey,
    },
  });

  return data;
};
