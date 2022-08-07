import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  fadingEdgeLength: 100,
} as ScrollViewProps)`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.title};
  padding-left: 15px;
  margin-top: 30px;
  margin-left: 5px;
`;
