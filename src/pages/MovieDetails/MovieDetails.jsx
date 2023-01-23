import { Box } from 'components/Box';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import MoviesCard from 'components/MoviesCard/MoviesCard';
import { STATUS } from 'constants/status.constants';
import { TextStyled } from 'pages/Home/Home.styled';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/posts.service';
import { SubTitleStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailsById, setMovieDetailsById] = useState({});
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await getMovieDetails(movieId);

        if (!data) return;

        setMovieDetailsById({
          title: data.title,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          overview: data.overview,
          genres: data.genres,
        });

        setStatus(STATUS.success);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again.');
        setStatus(STATUS.error);
      }
    };

    fetchData();
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

  const additionalInfoContent = ({ title }) => {
    return (
      <Link to={title} state={location.state}>
        <TextStyled>{title}</TextStyled>
      </Link>
    );
  };

  const backLinkRef = location.state?.from ?? '/movies';

  return (
    <Container>
      {status === STATUS.success && (
        <>
          <Box pb={4}>
            <ButtonLink to={backLinkRef}>Go back</ButtonLink>
          </Box>
          <Box>
            <MoviesCard movieDetailsById={movieDetailsById}></MoviesCard>
          </Box>
          <Box>
            <SubTitleStyled>Additional information</SubTitleStyled>
            <List
              items={listAdditionalInfo}
              setItemContent={additionalInfoContent}
            ></List>
          </Box>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === STATUS.loading && <Loader />}
    </Container>
  );
};
export default MovieDetails;
