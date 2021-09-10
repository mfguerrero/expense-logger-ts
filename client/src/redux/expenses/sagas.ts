import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { IExpense } from "../../types/inferfaces";
import {
  loadExpenses,
  setExpenses,
  saveExpense,
  addExpense,
  patchExpense,
  setCurrentExpense,
  removeExpense,
  deleteExpense,
  resetCurrentExpense,
} from "./reducer";

import fetchExpenses from "../../api/expenses";
import { PayloadAction } from "@reduxjs/toolkit";

function* displayError(message: string) {
  yield call(toast.error, message);
}

function* displaySuccess(message: string) {
  yield call(toast.success, message);
}

function* onLoadExpenses(): any {
  yield put(setExpenses({ executing: true }));
  const result = yield call(fetchExpenses.getAll);
  const { success, data, message } = result;
  if (success) {
    yield put(setExpenses({ executing: false, data }));
  } else {
    yield put(setExpenses({ executing: false }));
    yield call(displayError, message);
  }
}

function* onSaveExpense(action: PayloadAction<Partial<IExpense>>): any {
  yield put(setCurrentExpense({ executing: true }));
  const result = yield call(fetchExpenses.save, action.payload);
  const { success, data, message } = result;
  if (success) {
    yield put(setCurrentExpense({ executing: false, expense: data }));
    if (action.payload.id) yield put(patchExpense(action.payload));
    else yield put(addExpense(data));
    yield call(
      displaySuccess,
      `Expense: ${action.payload.description} ${action.payload.id ? "updated" : "saved"} successfully!`
    );
  } else {
    yield put(setCurrentExpense({ executing: false }));
    yield call(displayError, message);
  }
}

function* onDeleteExpense(action: PayloadAction<number>): any {
  yield put(setCurrentExpense({ executing: true }));
  const result = yield call(fetchExpenses.remove, action.payload);
  const { success, message } = result;
  if (success) {
    yield put(removeExpense(action.payload));
    yield put(resetCurrentExpense());
    yield call(displaySuccess, "Expense removed successfully!");
  } else {
    yield put(setCurrentExpense({ executing: false }));
    yield call(displayError, message);
  }
}

function* listenActions() {
  yield takeLatest(loadExpenses, onLoadExpenses);
  yield takeLatest(saveExpense, onSaveExpense);
  yield takeLatest(deleteExpense, onDeleteExpense);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
