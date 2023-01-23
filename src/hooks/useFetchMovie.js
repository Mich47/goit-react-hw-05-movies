import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'services/posts.service';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await getTrendingMovies();

        if (!data) return;

        console.log('data ', data);

        const { results, total_results } = data;

        if (!total_results) {
          toast.warn("Sorry, we couldn't find any matches. Please try again.");
          setStatus(STATUS.success);
          return;
        }

        setMovies(results.map(({ id, title }) => ({ id, title })));

        setStatus(STATUS.success);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again.');
        setStatus(STATUS.error);
      }
    };
    fetchData();
  }, []);

  return { movies, status };
};
