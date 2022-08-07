import { Container, GoBackButton, MovieIcon, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

type Props = {
  onGoBackPress?: () => void;
};

export function Header({ onGoBackPress }: Props) {
  return (
    <Container testID="header">
      {!!onGoBackPress && (
        <GoBackButton onPress={onGoBackPress} testID="goBackButton">
          <Feather name="arrow-left" size={30} color={theme.colors.title} />
        </GoBackButton>
      )}
      <MovieIcon testID="header-icon" name="movie-roll" />
      <Title testID="header-title">Filmes</Title>
    </Container>
  );
}
