import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const devModeEnabled = process.env.NODE_ENV === 'development';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  ...getDefaultMiddleware({ thunk: false }),
  routerMiddleware(history),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer(history),
  devTools: devModeEnabled,
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
