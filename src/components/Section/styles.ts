import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  height: 300px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.bold};

  margin: 10px 0 0 20px;
`;

export const LoadingContainer = styled.View`
  width: 150px;
  height: 255px;

  justify-content: center;
  align-items: center;
`;
