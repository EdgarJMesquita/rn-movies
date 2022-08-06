import { traktapi } from '../service/traktapi';
import { random } from '../utils/random';

// Função para carregamento inicial das categorias tanto filmes quanto séries.
export const init = async (dispatch) => {
  const categories = [
    ['movies', 'popular'],
    ['shows', 'popular'],
    ['movies', 'recommended/weekly'],
    ['shows', 'recommended/weekly'],
    ['movies', 'watched/weekly'],
    ['shows', 'watched/weekly'],
    ['movies', 'trending'],
    ['shows', 'trending'],
  ];

  await Promise.all(
    categories.map(async ([type, category]) => {
      const { data } = await traktapi.get<MoviePopular[]>(
        `${type}/${category}?page=1&limit=15&extended=full`,
      );
      dispatch({
        type: 'INIT',
        payload: { category, movies: data, page: 1, loading: false },
      });
    }),
  );
};

// Carrega paginação de acordo com a categoria passado como argumento.
export const load_more = (category: Category) => async (dispatch, getState) => {
  const state = getState();
  const { page, loading } = state[category];
  const nextPage = page + 1;

  if (loading) return;

  dispatch({ type: 'LOADING', payload: { category, loading: true } });

  // Promise.all para buscar mais filmes e séries mais rápido.
  const results = await Promise.all(
    ['movies', 'shows'].map(async (type) => {
      const { data } = await traktapi.get<MoviePopular[]>(
        `${type}/${category}?page=${nextPage}`,
      );
      return data;
    }),
  );

  dispatch({
    type: 'LOAD_MORE',
    payload: {
      category,
      movies: results.flat().sort(() => random()), // embaralhamento
      page: nextPage,
      loading: false,
    },
  });
};
