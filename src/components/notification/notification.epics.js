import {
  createShowNotificationAction,
  createHideNotificationAction,
} from '../../components/notification/notification.action';
import { SHOW_NOTIFICATION } from '../../components/notification/notification.types';
import {
  FETCH_POKEMONS,
  UPDATE_FAVOURITE_POKEMON,
} from '../../features/pokemon-list/pokemon-list.types';

export const notificationFetchPokemonEpic = action$ =>
  action$.ofType(FETCH_POKEMONS.SUCCESS).map(action => {
    return createShowNotificationAction({
      message: `you have fetched ${action.payload.count} pokemon`,
      level: 'success',
    });
  });

export const notificationFavouritePokemonEpic = action$ =>
  action$.ofType(UPDATE_FAVOURITE_POKEMON).map(action => {
    return createShowNotificationAction({
      message: `Updated favourite pokemon`,
      level: 'warning',
    });
  });

export const hideNotificationEpic = action$ =>
  action$
    .ofType(SHOW_NOTIFICATION)
    .delay(2000)
    .map(createHideNotificationAction);
