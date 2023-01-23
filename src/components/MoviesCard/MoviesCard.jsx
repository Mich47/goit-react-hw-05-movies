import { Box } from 'components/Box';
import no_profile from '../../images/no_profile_picture.jpg';

const MoviesCard = ({ movieDetailsById }) => {
  const { title, poster_path, vote_average, overview, genres } =
    movieDetailsById;
  if (!title) return;

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : no_profile;

  const movieGenres = genres.length
    ? genres.map(({ name }) => name).join(', ')
    : 'Genres not found';

  return (
    <Box display="flex" gap={'16px'}>
      <Box width="512px">
        <img src={posterSrc} alt={title} />
      </Box>
      <Box>
        <h2>{title}</h2>
        <p>Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </Box>
    </Box>
  );
};
export default MoviesCard;
