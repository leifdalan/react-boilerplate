/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router/immutable';

const history = createBrowserHistory();
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return connectRouter(history)(combineReducers({
    route: routerReducer,
    global: globalReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  }));
}
