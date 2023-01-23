import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { Searchbar } from 'components/Searchbar';
import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovies } from 'services/posts.service';
import { TextStyled } from '../Home/Home.styled';

const Movies = () => {
  const [renderMovies, setRenderMovies] = useState([]); //*** */

  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get('query');
  const location = useLocation();
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',

  const handleSubmit = searchValue => {
    setQuery(searchValue ? { query: searchValue } : {});
  };
  //***************** */
  useEffect(() => {
    if (!searchQuery) {
      setRenderMovies([]);
      return;
    }

    const fetchData = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await searchMovies(searchQuery);

        if (!data) return;

        console.log('data ', data);

        const { results, total_results } = data;

        if (!total_results) {
          setStatus(STATUS.success);
          toast.warn("Sorry, we couldn't find any matches. Please try again.");
          setStatus(STATUS.success);
          return;
        }

        setRenderMovies(results.map(({ id, title }) => ({ id, title })));

        setStatus(STATUS.success);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please try again.');
        setStatus(STATUS.error);
      }
    };
    fetchData();
  }, [searchQuery]);

  //************************** */

  const renderMoviesContent = ({ id, title }) => {
    return (
      <Link to={String(id)} state={{ from: location }}>
        <TextStyled>{title}</TextStyled>
      </Link>
    );
  };

  return (
    <Container>
      <Searchbar
        onSubmitForm={handleSubmit}
        status={status}
        value={searchQuery}
      />
      {renderMovies && (
        <List items={renderMovies} setItemContent={renderMoviesContent} />
      )}
      {status === STATUS.loading && <Loader />}
    </Container>
  );
};

export default Movies;
