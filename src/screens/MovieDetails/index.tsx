import useSWR from 'swr';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { omdbapiFetcher } from '../../service/omdbapi';
import { Container, Description, Poster, Scroll, Title } from './styles';

type MovieDetailsProps = {
  data: MoviePopular;
};

export function MovieDetails({ data }: MovieDetailsProps) {
  const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
  const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);

  return (
    <Background>
      <Container>
        <Header />

        <Scroll>
          <Poster source={{ uri: omdb.Poster }} />
          <Title>{data.title}</Title>
          <Description>{omdb.Plot}</Description>
          {console.log(omdb.Actors)}
          {/*  <Section title="Populares" category="popular" />
          <Section title="Trending" category="trending" />
          <Section title="Top 10 recomendados" category="recommended/weekly" />
          <Section title="Mais assistidos" category="watched/weekly" /> */}
        </Scroll>
      </Container>
    </Background>
  );
}
