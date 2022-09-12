import {
	Container,
	GoBackButton,
	Icon,
	MovieIcon,
	Section,
	SignInButton,
	SignInTitle,
	Title,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

type Props = {};

export function Header({}: Props) {
	const { signIn, user } = useAuth();
	console.log(user);
	return (
		<Container testID="header">
			<Section>
				<Icon />
				<Title testID="header-title">Filmes</Title>
			</Section>

			<SignInButton onPress={signIn}>
				<SignInTitle>Entrar</SignInTitle>
			</SignInButton>
		</Container>
	);
}
