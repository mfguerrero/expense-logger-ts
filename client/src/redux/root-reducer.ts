import { combineReducers } from "@reduxjs/toolkit";
import { History } from "history";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";
import expensesReducer from "./expenses/reducer";
import filtersReducer from "./filters/reducer";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    expenses: expensesReducer,
    filters: filtersReducer,
  });

export default createRootReducer;
