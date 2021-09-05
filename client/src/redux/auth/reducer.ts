import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/inferfaces";

const initialState: {
  token: string;
  user: Partial<IUser> | null;
} = {
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<Partial<IUser>>) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.token = "";
    },
  },
});

export const login = createAction<{ email: string; password: string }>("auth/login");

export default authSlice.reducer;
export const { setToken, setUser, signOut } = authSlice.actions;
