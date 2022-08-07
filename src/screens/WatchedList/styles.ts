import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
})`
  flex: 1;
  width: 100%;
`;
