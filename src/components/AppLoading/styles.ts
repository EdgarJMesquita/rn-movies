import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.black};

  justify-content: center;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${theme.colors.white};
  font-weight: bold;
  margin-left: 5px;
  font-family: ${theme.fonts.bold};
  letter-spacing: 2px;
`;
