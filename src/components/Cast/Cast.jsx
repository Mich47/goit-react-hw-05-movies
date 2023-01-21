import { List } from 'components/List/List';
import { STATUS } from 'constants/status.constants';
import { TextStyled } from 'pages/Home.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCredits } from 'services/posts.service';
import no_profile from '../../images/no_profile_picture.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const { movieId } = useParams();
  console.log('movieId ', movieId);

  const fetchData = async movieId => {
    setStatus(STATUS.loading);
    try {
      const data = await getMovieCredits(movieId);

      if (!data) return;

      console.log('getMovieCast ', data.cast);
      const { cast } = data;

      // if (!total_results) {
      //   toast.warn("Sorry, we couldn't find any matches. Please try again.");
      //   setStatus(STATUS.idle);
      //   return;
      // }

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
      console.log('error ', error);
      toast.error('Oops! Something went wrong. Please try again.');
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const listItemContent = ({ name, character, profile_path }) => {
    const imgSrc = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : no_profile;

    return (
      <>
        <img src={imgSrc} alt={name} width="120" height="auto" />
        <TextStyled>{name}</TextStyled>
        <TextStyled>Character: {character}</TextStyled>
      </>
    );
  };

  return <List items={movieCast} setItemContent={listItemContent} />;
};
export default Cast;
