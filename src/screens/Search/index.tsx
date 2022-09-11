import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import useSWR from 'swr';
import { Background } from '../../components/Background';
import { Result } from '../../components/Result';
import { fetcher } from '../../service/traktapi';
import {
	Button,
	Buttons,
	Container,
	Input,
	Results,
	SearchBar,
	SearchBarIcon,
	Title,
} from './styles';

export function Search() {
	const input = useRef<TextInput | null>(null);
	const [query, setQuery] = useState('');
	const [type, setType] = useState<'movie' | 'show'>('movie');
	const { data } = useSWR<MoviePopular[]>(
		`search/${type}?query=${query}`,
		fetcher
	);

	useFocusEffect(
		useCallback(() => {
			if (!input.current) return;
			input.current.focus();
			return () => input.current.blur();
		}, [])
	);

	return (
		<Background>
			<Container>
				<Buttons>
					<Button selected={type === 'movie'} onPress={() => setType('movie')}>
						<Title>Filmes</Title>
					</Button>
					<Button selected={type === 'show'} onPress={() => setType('show')}>
						<Title>Séries</Title>
					</Button>
				</Buttons>
				<SearchBar>
					<SearchBarIcon />
					<Input ref={input} onChangeText={setQuery} />
				</SearchBar>
				<Results
					data={data}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => <Result data={item} />}
					keyboardShouldPersistTaps="handled"
				/>
			</Container>
		</Background>
	);
}
