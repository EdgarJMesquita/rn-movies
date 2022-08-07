import { act } from '@testing-library/react-native';
import { store } from '../../store';
import { save_to_watch, save_watched } from '../../store/actions';

describe('AsyncStorage', () => {
  it('should save watched to async storage correctly', async () => {
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
    await act(() => store.dispatch(save_watched(mock)));
    expect(store.getState().watchedList.movies[0].title).toBe(mock.title);
  });

  it('should remove watched from async storage correctly', async () => {
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
    await act(() => store.dispatch(save_watched(mock)));
    expect(store.getState().watchedList.movies.length).toBe(0);
  });
  it('should save toWatch to async storage correctly', async () => {
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
    await act(() => store.dispatch(save_to_watch(mock)));
    console.log(store.getState());
    expect(store.getState().toWatchList.movies[0].title).toBe(mock.title);
  });

  it('should remove toWatch from async storage correctly', async () => {
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
    await act(() => store.dispatch(save_to_watch(mock)));
    expect(store.getState().toWatchList.movies.length).toBe(0);
  });
});
