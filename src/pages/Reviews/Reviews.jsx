import { Box } from 'components/Box';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { TextStyled } from 'components/Typography/Typography.styled';
import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from 'services/posts.service';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',
  const { movieId } = useParams();

  const fetchData = async movieId => {
    setStatus(STATUS.loading);
    try {
      const data = await getMovieReviews(movieId);

      if (!data) return;

      const { results } = data;

      if (!results.length) {
        setStatus(STATUS.success);
        toast.warn("Sorry, we couldn't find any reviews.");
        return;
      }

      setMovieReviews(
        results.map(({ id, author, content }) => ({
          id,
          author,
          content,
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

  const movieReviewsContent = ({ author, content }) => {
    return (
      <>
        <TextStyled fontWeight="bold">Author: {author}</TextStyled>
        <TextStyled>{content}</TextStyled>
      </>
    );
  };

  return (
    <Box py={4}>
      {status === STATUS.success &&
        (movieReviews.length ? (
          <List items={movieReviews} setItemContent={movieReviewsContent} />
        ) : (
          <TextStyled fontWeight="bold">Reviews not found.</TextStyled>
        ))}
      {status === STATUS.loading && <Loader />}
    </Box>
  );
};

export default Reviews;
