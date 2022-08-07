import useSWR from 'swr';
import { Background } from '../../components/Background';
import { omdbapiFetcher } from '../../service/omdbapi';
import {
  Container,
  Description,
  Label,
  Poster,
  Scroll,
  Section,
  Text,
  Title,
} from './styles';
import { MovieDetailsScreenProps } from '../../routes/types';
import { WatchedButton } from '../../components/WatchedButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { save_watched } from '../../store/actions';

export function MovieDetails({ route }: MovieDetailsScreenProps) {
  const { data } = route.params;
  const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
  const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);

  const watchedList = useAppSelector((state) => state.watched);
  const dispatch = useAppDispatch();

  function handleAddToWatchedList() {
    dispatch(save_watched(data));
  }

  return (
    <Background>
      <Container>
        <Scroll>
          {omdb && <Poster source={{ uri: omdb.Poster }} />}
          <Title>{data?.title}</Title>
          <Description>{omdb?.Plot}</Description>

          <Section>
            <Label>Atores: </Label>
            <Text>{omdb?.Actors || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Gênero: </Label>
            <Text>{omdb?.Genre || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Diretor: </Label>
            <Text>{omdb?.Director || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Roteiristas: </Label>
            <Text>{omdb?.Writer || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Duração: </Label>
            <Text>{omdb?.Runtime || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Ano: </Label>
            <Text>{omdb?.Year || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Tipo: </Label>
            <Text>{omdb?.Type || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>IMDB: </Label>
            <Text>{omdb?.Ratings[0]?.Value || 'Carregando'}</Text>
          </Section>

          <Section>
            <Label>Rotten Tomatoes: </Label>
            <Text>{omdb?.Ratings[1]?.Value || 'N/A'}</Text>
          </Section>

          <Section>
            <Label>Metacritic: </Label>
            <Text>{omdb?.Ratings[2]?.Value || 'N/A'}</Text>
          </Section>
          <WatchedButton
            onPress={handleAddToWatchedList}
            watched={watchedList?.movies?.some(
              (item) => item.title === data.title,
            )}
          />
        </Scroll>
      </Container>
    </Background>
  );
}
