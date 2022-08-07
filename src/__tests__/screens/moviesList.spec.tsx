import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { MoviesList } from '../../screens/MoviesList';
import { Provider } from 'react-redux';
import { store } from '../../store';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('MoviesList', () => {
  test('header should exist header', () => {
    const { getByTestId } = render(<MoviesList />, { wrapper });
    const header = getByTestId('header');
    expect(header).toBeTruthy();
  });
});
