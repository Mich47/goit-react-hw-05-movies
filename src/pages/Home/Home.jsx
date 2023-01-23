import { Box } from 'components/Box';
import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { LinkStyled } from 'components/Typography/Link.styled';
import { MainTitleStyled } from 'components/Typography/Typography.styled';
import { STATUS } from 'constants/status.constants';
import { useFetchTrendingMovies } from 'hooks/useFetchMovie';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { movies: trendingMovies, status } = useFetchTrendingMovies();
  const location = useLocation();

  const trendingMoviesContent = ({ id, title }) => {
    return (
      <LinkStyled to={'movies/' + String(id)} state={{ from: location }}>
        {title}
      </LinkStyled>
    );
  };

  return (
    <Box as="section">
      <Container>
        <MainTitleStyled>Trending today</MainTitleStyled>
        {trendingMovies && (
          <List items={trendingMovies} setItemContent={trendingMoviesContent} />
        )}
        {status === STATUS.loading && <Loader />}
      </Container>
    </Box>
  );
};

export default Home;
