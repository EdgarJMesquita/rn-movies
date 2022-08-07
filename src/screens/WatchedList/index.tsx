import { Background } from '../../components/Background';
import { Container, Scroll, Title } from './styles';
import { useAppSelector } from '../../store/hooks';
import { WatchedMovieCard } from '../../components/WatchedMovieCard';
import { EmptyMessage } from '../../components/EmptyMessage';

export function WatchedList() {
  const watchedMovies = useAppSelector((state) => state.watchedList);

  return (
    <Background>
      <Container>
        <Title>Assistidos</Title>
        {watchedMovies.movies.length > 0 && (
          <Scroll>
            {watchedMovies.movies.map((movie, key) => (
              <WatchedMovieCard data={movie} key={key} />
            ))}
          </Scroll>
        )}
        {watchedMovies.movies.length === 0 && (
          <EmptyMessage message="Você ainda não assistiu nenhum filme/série" />
        )}
      </Container>
    </Background>
  );
}
