import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';

type Props = {
	data: MoviePopular;
};

export function Result({ data }: Props) {
	const navigation = useNavigation();

	return (
		<Container onPress={() => navigation.navigate('MovieDetails', { data })}>
			<Title>
				{data?.title || data?.movie?.title || data?.show?.title}
				{` (${data?.year || data?.movie?.year || data?.show?.year})`}
			</Title>
		</Container>
	);
}
