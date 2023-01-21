import no_profile from '../../../images/no_profile_picture.jpg';

const MoviesCard = ({ movieDetailsById }) => {
  const { title, poster_path, vote_average, overview, genres } =
    movieDetailsById;
  if (!title) return;
  console.log('genres ', genres);

  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : no_profile;

  const movieGenres = genres.length
    ? genres.map(({ name }) => name).join(', ')
    : 'Genres not found';

  return (
    <div>
      <div>
        <img src={posterSrc} alt={title} width="120" height="auto" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
};
export default MoviesCard;
