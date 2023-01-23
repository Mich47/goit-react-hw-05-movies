import { Box } from 'components/Box';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { TextStyled } from 'components/Typography/Typography.styled';
import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCredits } from 'services/posts.service';
import no_profile from '../../images/no_profile_picture.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const { movieId } = useParams();

  const fetchData = async movieId => {
    setStatus(STATUS.loading);
    try {
      const data = await getMovieCredits(movieId);

      if (!data) return;

      const { cast } = data;

      if (!cast.length) {
        setStatus(STATUS.success);
        toast.warn("Sorry, we couldn't find any cast.");
        return;
      }

      setMovieCast(
        cast.map(({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        }))
      );

      setStatus(STATUS.success);
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.');
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const movieCastContent = ({ name, character, profile_path }) => {
    const imgSrc = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : no_profile;

    return (
      <Box py={4}>
        <img src={imgSrc} alt={name} width="180" height="auto" />
        <TextStyled fontWeight="bold">{name}</TextStyled>
        <TextStyled>Character: {character}</TextStyled>
      </Box>
    );
  };

  return (
    <>
      {status === STATUS.success &&
        (movieCast.length ? (
          <List items={movieCast} setItemContent={movieCastContent} />
        ) : (
          <TextStyled fontWeight="bold">Cast not found.</TextStyled>
        ))}
      {status === STATUS.loading && <Loader />}
    </>
  );
};

export default Cast;
