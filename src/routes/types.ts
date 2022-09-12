import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamsList = {
	MoviesList: undefined;
	MovieDetails: { data: MoviePopular };
	Favorites: undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamsList>;
export type MovieDetailsScreenProps = NativeStackScreenProps<
	RootStackParamsList,
	'MovieDetails'
>;

declare global {
	namespace ReactNavigation {
		interface RootParamList {
			MoviesList: undefined;
			MovieDetails: { data: MoviePopular };
			Favorites: undefined;
			Search: undefined;
			Profile: undefined;
		}
	}
}
