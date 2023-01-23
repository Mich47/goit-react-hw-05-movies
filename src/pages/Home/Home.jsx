import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'services/posts.service';
import { TextStyled, TitleStyled } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const location = useLocation();

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

        setTrendingMovies(results.map(({ id, title }) => ({ id, title })));

        setStatus(STATUS.success);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again.');
        setStatus(STATUS.error);
      }
    };
    fetchData();
  }, []);

  const trendingMoviesContent = ({ id, title }) => {
    return (
      <Link to={'movies/' + String(id)} state={{ from: location }}>
        <TextStyled>{title}</TextStyled>
      </Link>
    );
  };

  return (
    <Container>
      <TitleStyled>Trending today</TitleStyled>
      {trendingMovies && (
        <List items={trendingMovies} setItemContent={trendingMoviesContent} />
      )}
      {status === STATUS.loading && <Loader />}
    </Container>
  );
};
export default Home;
