import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { IExpense } from "../../types/inferfaces";

const initExpense: Partial<IExpense> = {
  description: "",
  amount: 0,
  date: DateTime.now().toISODate(),
  comments: "",
};

const initialState = {
  expenses: {
    executing: false,
    data: [] as IExpense[],
  },
  currentExpense: {
    executing: false,
    expense: initExpense,
  },
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses(state, action: PayloadAction<Partial<{ executing: boolean; data: IExpense[] }>>) {
      state.expenses = {
        ...state.expenses,
        ...action.payload,
      };
    },
    addExpense(state, action: PayloadAction<IExpense>) {
      state.expenses.data.push(action.payload);
    },
    patchExpense(state, action: PayloadAction<Partial<IExpense>>) {
      const update = action.payload;
      if (update.id) {
        const expenseIndex = state.expenses.data.findIndex((expense) => expense.id === update.id);
        if (expenseIndex > -1) state.expenses.data[expenseIndex] = { ...state.expenses.data[expenseIndex], ...update };
      }
    },
    removeExpense(state, action: PayloadAction<number>) {
      const filtered = state.expenses.data.filter((expense) => expense.id !== action.payload);
      state.expenses.data = filtered;
    },
    setCurrentExpense(state, action: PayloadAction<Partial<{ executing: boolean; expense: Partial<IExpense> }>>) {
      state.currentExpense = {
        ...state.currentExpense,
        ...action.payload,
      };
    },
    resetCurrentExpense(state) {
      state.currentExpense = {
        executing: false,
        expense: initExpense,
      };
    },
  },
});

export const loadExpenses = createAction("expenses/loadExpenses");
export const saveExpense = createAction<Partial<IExpense>>("expenses/saveExpense");
export const updateExpense = createAction("expenses/updateExpense");
export const deleteExpense = createAction<number>("expenses/deleteExpense");

export default expensesSlice.reducer;
export const { setExpenses, addExpense, patchExpense, setCurrentExpense, removeExpense, resetCurrentExpense } =
  expensesSlice.actions;
