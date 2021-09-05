import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IExpense } from "../../types/inferfaces";

const initialState = {
  expenses: {
    loading: false,
    data: [] as IExpense[],
  },
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses(state, action: PayloadAction<Partial<{ loading: boolean; data: IExpense[] }>>) {
      state.expenses = {
        ...state.expenses,
        ...action.payload,
      };
    },
  },
});

export const loadExpenses = createAction("expenses/loadExpenses");
export default expensesSlice.reducer;
export const { setExpenses } = expensesSlice.actions;
