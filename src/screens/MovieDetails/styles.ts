import { ImageProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 30,
  },
})`
  flex: 1;
  width: 100%;
`;

export const Poster = styled.Image.attrs({
  resizeMethod: 'resize',
  resizeMode: 'cover',
} as ImageProps)`
  width: 100%;
  height: 300px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: ${theme.colors.title};
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const Actor = styled.Text``;
