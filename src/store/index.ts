import { applyMiddleware, legacy_createStore } from 'redux';
import promise from 'redux-promise-middleware';
import { init, load_to_watch, load_watched } from './actions';
import thunk from 'redux-thunk';

// Não tive certeza se poderia usar @reduxjs/toolkit
// Só um disclaimer aqui, esta é a segunda vez que utilizo redux
// A API de Contexto do react sempre atendeu aos meus projetos tanto pessoais quanto profissionais.

type InitialState = {
  [key: string]: {
    movies: MoviePopular[];
    page: number;
    loading: boolean;
  };
  watchedList: {
    movies: MoviePopular[];
    page: number;
    loading: boolean;
  };
  toWatchList: {
    movies: MoviePopular[];
    page: number;
    loading: boolean;
  };
};

const initialState: InitialState = {
  watchedList: {
    movies: [],
    page: 1,
    loading: false,
  },
  toWatchList: {
    movies: [],
    page: 1,
    loading: false,
  },
};

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
    case 'SAVE_WATCHED':
      return { ...state, watchedList: action.payload };
    case 'SAVE_TO_WATCH':
      return { ...state, toWatchList: action.payload };
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
store.dispatch(load_watched);
store.dispatch(load_to_watch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
