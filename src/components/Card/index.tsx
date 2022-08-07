import { Image } from 'react-native';
import useSWR from 'swr';
import { omdbapiFetcher } from '../../service/omdbapi';
import { Loading } from '../Loading';
import { Container, LoadingContainer } from './styles';

type Props = {
  data: MoviePopular;
};

export function Card({ data }: Props) {
  const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
  const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);

  return (
    <Container>
      {!omdb && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {omdb && (
        <Image
          source={{ uri: omdb.Poster }}
          style={{ width: '100%', height: 225 }}
          resizeMode="cover"
        />
      )}
    </Container>
  );
}
/* export function Card({ data }: Props) {
  const omdb = useSWR<OMDBMovie>(`?i=${data.ids.imdb}`, omdbapiFetcher);

  return (
    <Container>
      {!omdb.data && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {omdb.data && (
        <Image
          source={{ uri: omdb.data.Poster }}
          style={{ width: '100%', minHeight: 470 }}
          resizeMode="contain"
        />
      )}
      <Footer>
        <Title>{data.title}</Title>
        <Description>{omdb?.data?.Plot || 'Carregando'}</Description>
      </Footer>
    </Container>
  );
} */
