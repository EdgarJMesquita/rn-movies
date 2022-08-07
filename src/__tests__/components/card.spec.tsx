import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Card } from '../../components/Card';
import { NavigationContainer } from '@react-navigation/native';

const wrapper = ({ children }) => (
  <NavigationContainer>{children}</NavigationContainer>
);

describe('Card', () => {
  const mock: MoviePopular = {
    title: 'Resurrection',
    year: 2022,
    ids: {
      trakt: 698200,
      slug: 'resurrection-2022',
      imdb: 'tt11540726',
      tmdb: 872497,
    },
  };
  it('should render card', () => {
    const { getByTestId } = render(<Card data={mock} />, {
      wrapper,
    });
    const card = getByTestId('card');
    expect(card).toBeTruthy();
  });
});
