import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { Button, Container, Selection, Title } from './styles';

type Props = {
	type: 'movie' | 'show';
	setType: React.Dispatch<React.SetStateAction<'movie' | 'show'>>;
};

export function SearchFilter({ type, setType }: Props) {
	const animation = useRef(new Animated.Value(0)).current;
	const { width } = Dimensions.get('screen');
	const half = (width - 11) / 2;

	useEffect(() => {
		if (type === 'movie') {
			Animated.spring(animation, {
				toValue: 0,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.spring(animation, {
				toValue: half,
				useNativeDriver: true,
			}).start();
		}
	}, [type]);

	return (
		<Container>
			<Selection style={{ transform: [{ translateX: animation }] }} />
			<Button onPress={() => setType('movie')}>
				<Title>Filmes</Title>
			</Button>
			<Button onPress={() => setType('show')}>
				<Title>Séries</Title>
			</Button>
		</Container>
	);
}
