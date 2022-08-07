import styled, { css } from 'styled-components/native';
import { theme } from '../../global/theme';

type Props = {
  watched: boolean;
};

export const Button = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;

  padding: 0 15px;

  flex-direction: row;

  align-items: center;

  background-color: ${({ watched }) =>
    watched ? 'transparent' : theme.colors.button};

  border-radius: 10px;

  margin-top: 15px;

  border-width: 2px;
  border-color: ${({ watched }) =>
    watched ? theme.colors.text : theme.colors.button};
`;

export const Title = styled.Text<Props>`
  font-size: 16px;
  font-family: ${theme.fonts.semibold};
  color: ${theme.colors.title};
  margin-left: 15px;
  flex: 1;
  text-align: center;
  margin-right: 20px;
`;
