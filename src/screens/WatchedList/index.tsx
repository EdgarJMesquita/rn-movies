import { FlatList, ScrollView, View } from 'react-native';
import { Background } from '../../components/Background';
import { Container, Scroll } from './styles';
import { useAppSelector } from '../../store/hooks';
import { WatchedMovieCard } from '../../components/WatchedMovieCard';

export function WatchedList() {
  const watchedMovies = useAppSelector((state) => state.watched);

  return (
    <Background>
      <Container>
        <Scroll>
          {watchedMovies.movies.map((movie, key) => (
            <WatchedMovieCard data={movie} key={key} />
          ))}
        </Scroll>
      </Container>
    </Background>
  );
}
