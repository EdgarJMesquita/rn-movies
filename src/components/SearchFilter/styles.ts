import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

type Props = {
	selected: boolean;
};

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;

	margin: 10px 0;
`;

export const Selection = styled(Animated.View)`
	width: 49%;
	height: 40px;

	background-color: ${theme.colors.primary};

	border-radius: 10px;

	position: absolute;
`;

export const Button = styled.TouchableOpacity<Props>`
	width: 49%;

	height: 40px;

	padding: 0 15px;

	flex-direction: row;

	align-items: center;

	/* background-color: ${({ selected }) =>
		selected ? theme.colors.primary : 'transparent'}; */

	border-radius: 10px;

	border-width: 1px;

	border-color: ${theme.colors.primary};
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
