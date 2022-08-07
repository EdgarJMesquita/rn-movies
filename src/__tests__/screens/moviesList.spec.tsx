import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { MoviesList } from '../../screens/MoviesList';
import { Provider } from 'react-redux';
import { store } from '../../store';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('MoviesList', () => {
  it('should exist popular category', () => {
    const { getByText } = render(<MoviesList />, { wrapper });
    const categoryTitle = getByText('Populares');
    expect(categoryTitle).toBeTruthy();
  });

  it('should exist trending category', () => {
    const { getByText } = render(<MoviesList />, { wrapper });
    const categoryTitle = getByText('Trending');
    expect(categoryTitle).toBeTruthy();
  });
  it('should exist recommended category', () => {
    const { getByText } = render(<MoviesList />, { wrapper });
    const categoryTitle = getByText('Top 10 recomendados');
    expect(categoryTitle).toBeTruthy();
  });
  it('should exist most watched category', () => {
    const { getByText } = render(<MoviesList />, { wrapper });
    const categoryTitle = getByText('Mais assistidos');
    expect(categoryTitle).toBeTruthy();
  });

  it('should exists scrollView', () => {
    const { getByTestId } = render(<MoviesList />, { wrapper });
    const scroll = getByTestId('scroll');
    expect(scroll).toBeTruthy();
  });
});
