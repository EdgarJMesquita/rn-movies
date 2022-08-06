import { applyMiddleware, legacy_createStore } from 'redux';
import promise from 'redux-promise-middleware';
import { init } from './actions';
import thunk from 'redux-thunk';

// Não tive certeza se poderia usar @reduxjs/toolkit

type InitialState = {
  [key: string]: {
    movies: MoviePopular[];
    page: number;
    loading: boolean;
  };
};

const initialState: InitialState = {};

function reducer(state = initialState, action): InitialState {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category],
          loading: action.payload,
        },
      };
    case 'INIT':
      return { ...state, [action.payload.category]: action.payload };
    case 'LOAD_MORE':
      const category = action.payload.category;
      const movies = state[category].movies;
      const updatedMovies = [...movies, ...action.payload.movies];
      return {
        ...state,
        [category]: {
          loading: action.payload.loading,
          page: action.payload.page,
          movies: updatedMovies,
        },
      };
    default:
      return state;
  }
}

let store = legacy_createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, promise),
);

export { store };

store.dispatch(init);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
