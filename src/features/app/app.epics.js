import { fetchPokemons } from './app.actions';
import { APP_LOAD } from './app.types';

export const appLoadEpic = action$ =>
  action$.ofType(APP_LOAD).map(fetchPokemons);
