import { FlatList } from 'react-native';
import { load_more } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Card } from '../Card';
import { Loading } from '../Loading';
import { Container, LoadingContainer, Title } from './styles';

type Props = {
	title: string;
	category: Category;
};

export function Section({ title, category }: Props) {
	const state = useAppSelector((state) => state[category]);
	const dispatch = useAppDispatch();

	return (
		<Container>
			<Title testID="title">{title}</Title>
			<FlatList
				testID="movies"
				data={state?.movies}
				keyExtractor={(_, index) => index.toString()}
				contentContainerStyle={{ padding: 20 }}
				onEndReachedThreshold={0.1}
				showsHorizontalScrollIndicator={false}
				fadingEdgeLength={100}
				onEndReached={() => dispatch(load_more(category))}
				renderItem={({ item }) => <Card data={item} />}
				horizontal
				ListFooterComponent={
					state?.loading ? (
						<LoadingContainer>
							<Loading style={{ marginBottom: 10 }} />
						</LoadingContainer>
					) : null
				}
			/>
		</Container>
	);
}
