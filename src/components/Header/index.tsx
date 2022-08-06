import { Container, MovieIcon, Title } from './styles';

export function Header() {
  return (
    <Container>
      <MovieIcon testID="header-icon" name="movie-roll" />
      <Title testID="header-title">Filmes</Title>
    </Container>
  );
}
