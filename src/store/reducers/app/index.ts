import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { AppState } from "../../../models/app";

const initialState: AppState = {
  userId: "",
};

export const appSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setAppInyection: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const selectAppState = (state: RootState) => state.app;
export const { setAppInyection } = appSlice.actions;
export default appSlice.reducer;
