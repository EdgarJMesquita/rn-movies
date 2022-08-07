import { Background } from '../../components/Background';
import { Section } from '../../components/Section';
import { Container, Scroll } from './styles';

export function MoviesList() {
  return (
    <Background>
      <Container>
        <Scroll testID="scroll">
          <Section title="Populares" category="popular" />
          <Section title="Trending" category="trending" />
          <Section title="Top 10 recomendados" category="recommended/weekly" />
          <Section title="Mais assistidos" category="watched/weekly" />
        </Scroll>
      </Container>
    </Background>
  );
}
