import { Container, GoBackButton, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

type Props = {
	onGoBackPress: () => void;
	title: string;
};

export function HeaderDetails({ onGoBackPress, title }: Props) {
	return (
		<Container testID="header">
			<GoBackButton onPress={onGoBackPress} testID="goBackButton">
				<Feather name="arrow-left" size={30} color={theme.colors.title} />
			</GoBackButton>
			<Title>{title}</Title>
		</Container>
	);
}
