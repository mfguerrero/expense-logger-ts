import { spawn } from "redux-saga/effects";

import expensesSaga from "./expenses/sagas";
import authSaga from "./auth/sagas";

export default function* root() {
  yield spawn(expensesSaga);
  yield spawn(authSaga);
}
