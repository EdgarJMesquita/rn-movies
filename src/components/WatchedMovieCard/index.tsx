import { Image } from 'react-native';
import useSWR from 'swr';
import { omdbapiFetcher } from '../../service/omdbapi';
import { Loading } from '../Loading';
import { Button, LoadingContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  data: MoviePopular;
};

export function WatchedMovieCard({ data }: Props) {
  const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
  const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.navigate('MovieDetails', { data })}>
      {!omdb && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {omdb && (
        <Image
          source={{ uri: omdb.Poster }}
          style={{ width: '100%', height: 250 }}
          resizeMode="cover"
        />
      )}
    </Button>
  );
}
