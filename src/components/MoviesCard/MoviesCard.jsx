import {
  SubTitleStyled,
  TextStyled,
  TitleStyled,
} from 'components/Typography/Typography.styled';
import no_profile from '../../images/no_profile_picture.jpg';
import { Container, DescWrapper, ImageWrapper } from './MoviesCard.styled';

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
    <Container>
      <ImageWrapper>
        <img src={posterSrc} alt={title} />
      </ImageWrapper>
      <DescWrapper>
        <TitleStyled fontSize="l">{title}</TitleStyled>
        <TextStyled>Score: {vote_average}</TextStyled>
        <SubTitleStyled>Overview</SubTitleStyled>
        <TextStyled>{overview}</TextStyled>
        <SubTitleStyled>Genres</SubTitleStyled>
        <TextStyled>{movieGenres}</TextStyled>
      </DescWrapper>
    </Container>
  );
};
export default MoviesCard;
