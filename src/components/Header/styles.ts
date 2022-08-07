import { ImageProps, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Movie from '../../assets/film.png';

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
  color: ${theme.colors.title};
`;

export const Icon = styled.Image.attrs({
  source: Movie,
} as ImageProps)`
  height: 24px;
  width: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.bold};
  margin-left: 5px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: ${(60 + StatusBar.currentHeight) / 2}px;
`;
