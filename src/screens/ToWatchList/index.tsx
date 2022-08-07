import { Background } from '../../components/Background';
import { Container, Scroll, Title } from './styles';
import { useAppSelector } from '../../store/hooks';
import { WatchedMovieCard } from '../../components/WatchedMovieCard';
import { EmptyMessage } from '../../components/EmptyMessage';

export function ToWatchList() {
  const toWatchMovies = useAppSelector((state) => state.toWatchList);

  return (
    <Background>
      <Container>
        <Title>Para assistir</Title>
        {toWatchMovies.movies.length > 0 && (
          <Scroll>
            {toWatchMovies.movies.map((movie, key) => (
              <WatchedMovieCard data={movie} key={key} />
            ))}
          </Scroll>
        )}
        {toWatchMovies.movies.length === 0 && (
          <EmptyMessage message="Você ainda não adicionou a esta lista" />
        )}
      </Container>
    </Background>
  );
}
