import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

const initialState = {
  match: "",
  startDate: DateTime.now().startOf("month"),
  endDate: DateTime.now().endOf("month"),
  orderBy: "date",
  asc: true,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMatch(state, action: PayloadAction<string>) {
      state.match = action.payload;
    },
    setOrder(state, action: PayloadAction<string>) {
      state.orderBy = action.payload;
    },
    setStartDate(state, action: PayloadAction<DateTime>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<DateTime>) {
      state.endDate = action.payload;
    },
    toggleAsc(state) {
      state.asc = !state.asc;
    },
  },
});

export default filtersSlice.reducer;
export const { setMatch, setOrder, setStartDate, setEndDate, toggleAsc } = filtersSlice.actions;
