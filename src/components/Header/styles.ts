import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: ${60 + StatusBar.currentHeight}px;
  padding-top: ${StatusBar.currentHeight}px;
  background-color: ${theme.colors.header};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MovieIcon = styled(MaterialCommunityIcons).attrs({ size: 24 })`
  color: ${theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-left: 5px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: ${(60 + StatusBar.currentHeight) / 2}px;
`;
