import { Box } from 'components/Box';
import Container from 'components/Container/Container';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader';
import { Searchbar } from 'components/Searchbar';
import { LinkStyled } from 'components/Typography/Link.styled';
import { STATUS } from 'constants/status.constants';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { searchMovies } from 'services/posts.service';

const Movies = () => {
  const [renderMovies, setRenderMovies] = useState([]); //*** */

  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get('query');
  const location = useLocation();
  const [status, setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error',

  const handleSubmit = searchValue => {
    setQuery(searchValue ? { query: searchValue } : {});
  };

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

        const { results, total_results } = data;

        if (!total_results) {
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

  const renderMoviesContent = ({ id, title }) => {
    return (
      <LinkStyled to={String(id)} state={{ from: location }}>
        {title}
      </LinkStyled>
    );
  };

  return (
    <Box as="section">
      <Container>
        <Searchbar
          onSubmitForm={handleSubmit}
          status={status}
          value={searchQuery}
          placeHolder="Search movies..."
        />
        {renderMovies && (
          <List items={renderMovies} setItemContent={renderMoviesContent} />
        )}
        {status === STATUS.loading && <Loader />}
      </Container>
    </Box>
  );
};

export default Movies;
