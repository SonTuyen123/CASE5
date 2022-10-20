import { configureStore } from "@reduxjs/toolkit";
import verifyReducer from "./features/verifySlice";

export const store = configureStore({
  reducer: {
    verify: verifyReducer,
  },
});
