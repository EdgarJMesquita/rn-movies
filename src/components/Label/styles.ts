import styled from 'styled-components/native';
import { theme } from '../../global/theme';

type TitleProps = {
  color: string;
};

export const Title = styled.Text<TitleProps>`
  font-family: ${theme.fonts.regular};
  color: ${({ color }) => color};
  font-size: 14px;
  margin-left: 5px;
`;
