import { Container, Title } from './styles';

type EmptyMessageProps = {
  message: string;
};

export function EmptyMessage({ message }: EmptyMessageProps) {
  return (
    <Container>
      <Title>{message}</Title>
    </Container>
  );
}
