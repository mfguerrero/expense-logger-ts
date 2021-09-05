import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

import createSagaMiddleware from "redux-saga";

import createRouteReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = configureStore({
  devTools: true,
  reducer: createRouteReducer(history),
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
