import { ImageProps, ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
} as ScrollViewProps)`
  flex: 1;
  width: 100%;
`;

export const Poster = styled.Image.attrs({
  resizeMethod: 'resize',
  resizeMode: 'cover',
} as ImageProps)`
  width: 100%;
  height: 450px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 5px 0;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.bold};
`;

export const Description = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
`;

export const Section = styled.Text`
  width: 100%;

  margin: 5px 0;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.text};
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.text};
  text-transform: capitalize;
`;
