import Container from 'components/Container/Container';
import { List } from 'components/List/List';
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
  console.log('location ', location);
  //   getTrendingMovies().then(console.log);
  //   console.log('getTrendingMovies() ', getTrendingMovies());

  const fetchData = async () => {
    setStatus(STATUS.loading);
    try {
      const data = await getTrendingMovies();

      if (!data) return;

      console.log('data ', data);
      const { results, total_results } = data;

      if (!total_results) {
        toast.warn("Sorry, we couldn't find any matches. Please try again.");
        setStatus(STATUS.idle);
        return;
      }

      setTrendingMovies(results.map(({ id, title }) => ({ id, title })));
      console.log('trendingMovies ', trendingMovies);

      setStatus(STATUS.success);
    } catch (error) {
      console.log('error ', error);
      toast.error('Oops! Something went wrong. Please try again.');
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItemContent = ({ id, title }) => {
    return (
      <Link to={'movies/' + String(id)}>
        <TextStyled>{title}</TextStyled>
      </Link>
    );
  };

  return (
    <Container>
      <TitleStyled>Trending today</TitleStyled>
      <List items={trendingMovies} setItemContent={listItemContent} />
    </Container>
  );
};
export default Home;
