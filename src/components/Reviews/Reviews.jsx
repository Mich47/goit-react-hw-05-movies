import { List } from 'components/List/List';
import { STATUS } from 'constants/status.constants';
import { TextStyled } from 'pages/Home.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from 'services/posts.service';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const { movieId } = useParams();
  console.log('movieId ', movieId);

  const fetchData = async movieId => {
    setStatus(STATUS.loading);
    try {
      const data = await getMovieReviews(movieId);

      if (!data) return;

      console.log('getMovieReviews ', data);
      const { results } = data;

      if (!results.length) {
        toast.warn("Sorry, we couldn't find any reviews.");
        setStatus(STATUS.idle);
        return;
      }

      setMovieReviews(
        results.map(({ id, author, content, updated_at }) => ({
          id,
          author,
          content,
          updated_at,
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

  const listItemContent = ({ author, content, updated_at }) => {
    return (
      <>
        <TextStyled>{author}</TextStyled>
        <TextStyled>{updated_at}</TextStyled>
        <TextStyled>{content}</TextStyled>
      </>
    );
  };

  return (
    <>
      {movieReviews.length ? (
        <List items={movieReviews} setItemContent={listItemContent} />
      ) : (
        <TextStyled>Reviews not found.</TextStyled>
      )}
    </>
  );
};

export default Reviews;
