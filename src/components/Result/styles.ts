import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.TouchableOpacity`
	height: 45px;
	width: 100%;
`;

export const Title = styled.Text`
	color: ${theme.colors.title};
`;
