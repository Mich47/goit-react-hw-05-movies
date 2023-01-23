import { Box } from 'components/Box';
import ButtonLink from 'components/Buttons/ButtonLink';
import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import MoviesCard from 'components/MoviesCard/MoviesCard';
import { SubTitleStyled } from 'components/Typography/Typography.styled';
import { STATUS } from 'constants/status.constants';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/posts.service';
import { LinkStyled } from './MovieDetails.styled';

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
      <LinkStyled to={title} state={location.state}>
        {title}
      </LinkStyled>
    );
  };

  const backLinkRef = location.state?.from ?? '/movies';

  return (
    <Box as="section">
      <Container>
        {status === STATUS.success && (
          <>
            <Box pb={4}>
              <ButtonLink to={backLinkRef}>Go back</ButtonLink>
            </Box>
            <Box pb={4} borderBottom="1px solid">
              <MoviesCard movieDetailsById={movieDetailsById}></MoviesCard>
            </Box>
            <Box py={4} borderBottom="1px solid">
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
    </Box>
  );
};
export default MovieDetails;
