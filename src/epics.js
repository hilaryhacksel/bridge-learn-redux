import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { appLoadEpic } from './features/app/app.epics';
import {
  notificationFetchPokemonEpic,
  notificationFavouritePokemonEpic,
  hideNotificationEpic,
} from './components/notification/notification.epics';
import { fetchPokemonsEpic } from './features/pokemon-list/pokemon-list.epics';

const rootEpic = combineEpics(
  fetchPokemonsEpic,
  appLoadEpic,
  notificationFetchPokemonEpic,
  notificationFavouritePokemonEpic,
  hideNotificationEpic,
);

export const epicMiddleware = createEpicMiddleware(rootEpic);
