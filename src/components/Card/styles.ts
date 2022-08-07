import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Button = styled.TouchableOpacity.attrs({
  activityOpacity: 0.8,
} as TouchableOpacityProps)`
  width: 150px;

  border-radius: 15px;

  elevation: 0.5;

  overflow: hidden;

  margin-right: 10px;
`;

export const LoadingContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Footer = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;
