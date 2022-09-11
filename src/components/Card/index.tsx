import { Image } from 'react-native';
import useSWR from 'swr';
import { omdbapiFetcher } from '../../service/omdbapi';
import { Loading } from '../Loading';
import { Button, LoadingContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type Props = {
	data: MoviePopular;
};

export function Card({ data }: Props) {
	const id = data?.movie?.ids?.imdb || data?.ids?.imdb || data?.show?.ids?.imdb;
	const { data: omdb } = useSWR<OMDBMovie>(`?i=${id}`, omdbapiFetcher);

	const navigation = useNavigation();

	return (
		<Button
			onPress={() => navigation.navigate('MovieDetails', { data })}
			testID='card'
		>
			{!omdb && (
				<LoadingContainer>
					<Loading />
				</LoadingContainer>
			)}
			{omdb && (
				<Image
					source={{ uri: omdb.Poster }}
					style={{
						width: '100%',
						height: 225,
					}}
					resizeMode='cover'
					testID='image'
				/>
			)}
		</Button>
	);
}
