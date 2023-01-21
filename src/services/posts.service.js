import axios from 'axios';

const APIKey = 'e0e51fe83e5367383559a53110fae0e8';

let isLoading = false;

export const getTrendingMovies = (page = 1) => {
  const URI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKey}&page=${page}`;

  return fetchData(URI);
};

export const searchMovies = (query, page = 1) => {
  const URI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}&page=${page}`;

  return fetchData(URI);
};

export const getMovieDetails = movie_id => {
  const URI = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}`;

  return fetchData(URI);
};

export const getMovieTrailers = movie_id => {
  const URI = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${APIKey}`;

  return fetchData(URI);
};

export const getGenres = () => {
  const URI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}`;
  return fetchData(URI);
};

export const getMovieCredits = movie_id => {
  const URI = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${APIKey}`;
  return fetchData(URI);
};

export const getMovieReviews = movie_id => {
  const URI = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${APIKey}`;
  return fetchData(URI);
};

async function fetchData(URI) {
  if (isLoading) return;

  isLoading = true;
  const { data } = await axios.get(URI);
  isLoading = false;

  return data;
}
