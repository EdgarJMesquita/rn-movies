import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { MoviesList } from '../../screens/MoviesList';

test('verifica o titulo do cabeçalho', () => {
  const { getByTestId } = render(<MoviesList />);
  const title = getByTestId('header-title');
  expect(title.props.children).toBe('Filmes');
  expect(title.props.style[0].fontSize).toBe(18);
  expect(title.props.style[0].color).toBe('#FFFFFF');
  expect(title.props.style[0].fontWeight).toBe('bold');
});
