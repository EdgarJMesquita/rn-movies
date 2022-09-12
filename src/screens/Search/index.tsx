import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import useSWR from 'swr';
import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';
import { Result } from '../../components/Result';
import { SearchFilter } from '../../components/SearchFilter';
import { fetcher } from '../../service/traktapi';
import {
	Container,
	Input,
	LoadingContainer,
	Results,
	SearchBar,
	SearchBarIcon,
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
			return input.current.blur;
		}, [])
	);

	return (
		<Background>
			<Container>
				<SearchFilter type={type} setType={setType} />
				<SearchBar>
					<SearchBarIcon />
					<Input ref={input} onChangeText={setQuery} />
				</SearchBar>
				<Results
					data={data}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => <Result data={item} />}
					keyboardShouldPersistTaps="handled"
					ListEmptyComponent={
						<LoadingContainer>
							<Loading size={30} />
						</LoadingContainer>
					}
				/>
			</Container>
		</Background>
	);
}
