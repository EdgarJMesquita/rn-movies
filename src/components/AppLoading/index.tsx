import { StatusBar } from 'expo-status-bar';
import { Loading } from '../Loading';
import { Container, Section, Title } from './styles';

export function AppLoading() {
  return (
    <Container>
      <StatusBar translucent />
      <Section>
        <Loading size={70} />
        <Title>Filmes</Title>
      </Section>
    </Container>
  );
}
