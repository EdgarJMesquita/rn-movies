import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

type Props = {
	selected: boolean;
};

export const Container = styled.View`
	flex: 1;
	width: 100%;

	padding: 0 10px 0;
`;

export const Title = styled.Text<Props>`
	font-size: 16px;
	font-family: ${theme.fonts.semibold};
	color: ${theme.colors.title};
	margin-left: 15px;
	flex: 1;
	text-align: center;
	margin-right: 20px;
`;

export const SearchBar = styled.View`
	height: 50px;

	width: 100%;

	background-color: ${theme.colors.header};

	flex-direction: row;

	align-items: center;

	padding: 0 10px;

	border-radius: 10px;
`;

export const SearchBarIcon = styled(Feather).attrs({
	name: 'search',
	size: 30,
	color: theme.colors.white,
})``;

export const Input = styled.TextInput.attrs({
	autoFocus: true,
})`
	flex: 1;
	height: 50px;

	padding-left: 10px;

	font-size: 18px;

	color: ${theme.colors.title};

	font-family: ${theme.fonts.regular};
`;

export const Results = styled.FlatList.attrs({
	contentContainerStyle: {
		paddingTop: 20,
		paddingRight: 15,
		paddingLeft: 15,
		paddingBottom: 20,
	},
})`
	flex: 1;
	width: 100%;
	background-color: ${theme.colors.header};
	margin-top: -7px;
`;

export const LoadingContainer = styled.View`
	justify-content: center;
	align-items: center;
	height: ${Dimensions.get('screen').height - 450};
`;
