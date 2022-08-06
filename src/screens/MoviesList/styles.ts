import styled from 'styled-components/native';

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
