import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { STATUS } from 'constants/status.constants';
import { useFetchTrendingMovies } from 'hooks/useFetchMovie';
import { Link, useLocation } from 'react-router-dom';
import { TextStyled, TitleStyled } from './Home.styled';

const Home = () => {
  const { movies: trendingMovies, status } = useFetchTrendingMovies();
  const location = useLocation();

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
