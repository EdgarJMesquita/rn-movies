import 'react-native';
import React from 'react';
import { act, render } from '@testing-library/react-native';
import { MoviesList } from '../../screens/MoviesList';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MovieDetails } from '../../screens/MovieDetails';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('MoviesDetails', () => {
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
  it('should exist popular category', () => {
    const { getByText } = render(
      <MovieDetails route={{ params: { data: mock } }} />,
      { wrapper },
    );
    const title = getByText(mock.title);
    expect(title.props.children).toBe(mock.title);
  });
});
