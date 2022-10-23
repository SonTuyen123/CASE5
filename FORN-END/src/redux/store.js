import {configureStore} from "@reduxjs/toolkit";
import verifyReducer from "./features/verifySlice";
import playerReducer from "./features/playerSlice";
export const store = configureStore({
  reducer: {
    verify: verifyReducer,
    player: playerReducer,
  },
});
