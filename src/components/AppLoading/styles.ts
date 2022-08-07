import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.background};

  justify-content: center;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 43px;
  color: ${theme.colors.title};
  margin-left: 3px;
  font-family: ${theme.fonts.medium};
  margin-bottom: 2px;
`;
