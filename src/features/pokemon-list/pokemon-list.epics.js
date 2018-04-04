import 'rxjs/add/operator/mergeMap'; // important: make sure you import whichever rxjs operator you want to use
import { Observable } from 'rxjs';
import { FETCH_POKEMONS } from './pokemon-list.types';
import { cleanPokemonRequest } from '../../utils/pokemonRequest';

export const fetchPokemonsEpic = action$ =>
  action$.ofType(FETCH_POKEMONS.START).mergeMap(action =>
    cleanPokemonRequest('pokemon')
      .map(results => ({
        type: FETCH_POKEMONS.SUCCESS,
        payload: results,
      }))
      .catch(error =>
        Observable.of({ type: FETCH_POKEMONS.FAILURE, payload: error }),
      ),
  );
