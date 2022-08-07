import { Dimensions, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity.attrs({
  activityOpacity: 0.8,
} as TouchableOpacityProps)`
  width: ${(Dimensions.get('screen').width - 45) / 2}px;
  border-radius: 15px;

  elevation: 0.5;

  overflow: hidden;

  margin: 5px;
`;

export const LoadingContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
