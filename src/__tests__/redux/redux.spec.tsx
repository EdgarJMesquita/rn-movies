import { act } from '@testing-library/react-native';
import { store } from '../../store';
import { init, load_more } from '../../store/actions';

describe('redux', () => {
  it('should load initial data on init()', async () => {
    await act(() => store.dispatch(init));
    const state = store.getState();
    expect(Object.keys(state).length).toBeGreaterThan(0);
    expect(state.popular.movies.length).toBeGreaterThan(0);
    expect(state.popular.loading).toBeFalsy();
    expect(state.popular.page).toBe(1);

    expect(state['recommended/weekly'].movies.length).toBeGreaterThan(0);
    expect(state['recommended/weekly'].loading).toBeFalsy();
    expect(state['recommended/weekly'].page).toBe(1);

    expect(state['watched/weekly'].movies.length).toBeGreaterThan(0);
    expect(state['watched/weekly'].loading).toBeFalsy();
    expect(state['watched/weekly'].page).toBe(1);

    expect(state.trending.movies.length).toBeGreaterThan(0);
    expect(state.trending.loading).toBeFalsy();
    expect(state.trending.page).toBe(1);
  });

  it('should loadMore videos/shows', async () => {
    const { dispatch, getState } = store;

    await act(() => dispatch(init));

    await act(() => dispatch(load_more('popular')));
    expect(getState().popular.movies.length).toBeGreaterThan(15);
    expect(getState().popular.loading).toBeFalsy();
    expect(getState().popular.page).toBe(2);

    await act(() => dispatch(load_more('trending')));
    expect(getState().trending.movies.length).toBeGreaterThan(15);
    expect(getState().trending.loading).toBeFalsy();
    expect(getState().trending.page).toBe(2);

    await act(() => dispatch(load_more('recommended/weekly')));
    expect(getState()['recommended/weekly'].movies.length).toBeGreaterThan(15);
    expect(getState()['recommended/weekly'].loading).toBeFalsy();
    expect(getState()['recommended/weekly'].page).toBe(2);

    await act(() => dispatch(load_more('watched/weekly')));
    expect(getState()['watched/weekly'].movies.length).toBeGreaterThan(15);
    expect(getState()['watched/weekly'].loading).toBeFalsy();
    expect(getState()['watched/weekly'].page).toBe(2);
  });
});
