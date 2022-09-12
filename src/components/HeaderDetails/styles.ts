import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
	width: 100%;
	height: ${60 + StatusBar.currentHeight}px;
	padding-top: ${StatusBar.currentHeight}px;
	background-color: ${theme.colors.header};

	flex-direction: row;
	align-items: center;

	padding-left: 15px;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: ${theme.colors.title};
	font-family: ${theme.fonts.bold};
	margin-left: 10px;
`;

export const GoBackButton = styled.TouchableOpacity``;
