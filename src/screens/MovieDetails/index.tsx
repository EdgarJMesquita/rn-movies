import useSWR from 'swr';
import { Background } from '../../components/Background';
import { omdbapiFetcher } from '../../service/omdbapi';
import {
	Container,
	Description,
	Label,
	Poster,
	Scroll,
	Section,
	Text,
	Title,
} from './styles';
import { MovieDetailsScreenProps } from '../../routes/types';
import { WatchButton } from '../../components/WatchButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { save_to_watch, save_watched } from '../../store/actions';
import { ToWatchButton } from '../../components/ToWatchButton';

export function MovieDetails({ route, navigation }: MovieDetailsScreenProps) {
	const { data } = route.params;
	const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
	const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);

	const state = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	function handleWatchedList() {
		dispatch(save_watched(data));
	}

	function handleToWatchList() {
		dispatch(save_to_watch(data));
	}

	const title = data?.title || data?.movie?.title || data?.show?.title;

	navigation.setOptions({ title });

	return (
		<Background>
			<Container>
				<Scroll>
					{omdb && <Poster source={{ uri: omdb.Poster }} />}
					<Title>{title}</Title>
					<Description>{omdb?.Plot}</Description>

					<Section>
						<Label>Atores: </Label>
						<Text>{omdb?.Actors || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Gênero: </Label>
						<Text>{omdb?.Genre || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Diretor: </Label>
						<Text>{omdb?.Director || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Roteiristas: </Label>
						<Text>{omdb?.Writer || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Duração: </Label>
						<Text>{omdb?.Runtime || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Ano: </Label>
						<Text>{omdb?.Year || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Tipo: </Label>
						<Text>{omdb?.Type || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>IMDB: </Label>
						<Text>{omdb?.Ratings[0]?.Value || 'Carregando'}</Text>
					</Section>

					<Section>
						<Label>Rotten Tomatoes: </Label>
						<Text>{omdb?.Ratings[1]?.Value || 'N/A'}</Text>
					</Section>

					<Section>
						<Label>Metacritic: </Label>
						<Text>{omdb?.Ratings[2]?.Value || 'N/A'}</Text>
					</Section>

					<ToWatchButton
						onPress={handleToWatchList}
						watched={
							!!state?.toWatchList?.movies?.some(
								(item) =>
									title ===
									(item?.title || item?.movie?.title || item?.show?.title)
							)
						}
					/>

					<WatchButton
						onPress={handleWatchedList}
						watched={
							!!state.watchedList?.movies?.some(
								(item) =>
									title ===
									(item?.title || item?.movie?.title || item?.show?.title)
							)
						}
					/>
				</Scroll>
			</Container>
		</Background>
	);
}
