import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { STATUS } from 'constants/status.constants';
import { TextStyled } from 'pages/Home/Home.styled';
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
        toast.warn("Sorry, we couldn't find any reviews.");
        setStatus(STATUS.success);
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
      toast.error('Oops! Something went wrong. Please try again.');
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  const movieReviewsContent = ({ author, content, updated_at }) => {
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
      {status === STATUS.success &&
        (movieReviews.length ? (
          <List items={movieReviews} setItemContent={movieReviewsContent} />
        ) : (
          <TextStyled>Reviews not found.</TextStyled>
        ))}
      {status === STATUS.loading && <Loader />}
    </>
  );
};

export default Reviews;
