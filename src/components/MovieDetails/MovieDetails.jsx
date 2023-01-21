import { Box } from 'components/Box';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { STATUS } from 'constants/status.constants';
import { TextStyled } from 'pages/Home.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/posts.service';
import MoviesCard from './MoviesCard/MoviesCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailsById, setMovieDetailsById] = useState({});
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',

  const fetchData = async movieDetailsById => {
    setStatus(STATUS.loading);
    try {
      const data = await getMovieDetails(movieDetailsById);

      if (!data) return;

      console.log('getMovieDetails ', data);
      console.log('data.title ', data.title);

      // setMovieDetailsById(data);
      setMovieDetailsById({
        title: data.title,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        overview: data.overview,
        genres: data.genres,
      });
      setStatus(STATUS.success);
    } catch (error) {
      console.log('error ', error);
      toast.error('Oops! Something went wrong. Please try again.');
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const listAdditionalInfo = [
    {
      id: 1,
      title: 'cast',
    },
    {
      id: 2,
      title: 'reviews',
    },
  ];

  const listItemContent = ({ title }) => {
    return (
      <Link to={title}>
        <TextStyled>{title}</TextStyled>
      </Link>
    );
  };

  return (
    <Container>
      <ButtonLink to="/">Go back</ButtonLink>
      <Box>
        {status === STATUS.success && (
          <MoviesCard movieDetailsById={movieDetailsById}></MoviesCard>
        )}
      </Box>
      <Box>
        <h3>Additional information</h3>
        <List
          items={listAdditionalInfo}
          setItemContent={listItemContent}
        ></List>
      </Box>
      <Outlet />
    </Container>
  );
};
export default MovieDetails;
