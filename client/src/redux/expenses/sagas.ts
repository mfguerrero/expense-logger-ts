import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { loadExpenses, setExpenses } from "./reducer";

import fetchExpenses from "../../api/expenses";

function* displayError(message: string) {
  yield call(toast.error, message);
}

function* onLoadExpenses(): any {
  yield put(setExpenses({ loading: true }));
  const result = yield call(fetchExpenses.getAll);
  const { success, data, message } = result;
  if (success) {
    yield put(setExpenses({ loading: false, data }));
  } else {
    yield put(setExpenses({ loading: false }));
    yield call(displayError, message);
  }
}

function* listenActions() {
  yield takeLatest(loadExpenses, onLoadExpenses);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
