import { Button, Title } from './styles';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
  watched: boolean;
};

export function WatchButton({ watched, ...props }: Props) {
  return (
    <Button watched={watched} {...props}>
      <Entypo
        name={watched ? 'minus' : 'plus'}
        size={24}
        color={theme.colors.title}
      />
      <Title watched={watched}>
        {watched ? 'Remover de assistido' : 'Adicionar para assistido'}
      </Title>
    </Button>
  );
}
