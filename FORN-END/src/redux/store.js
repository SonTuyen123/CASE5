import {configureStore} from "@reduxjs/toolkit";
import verifyReducer from "./features/verifySlice";
import playerReducer from "./features/playerSlice";
import listMusicReducer from "./features/listMusicSlice";
import loginReducer from "./features/loginSlice";
export const store = configureStore({
  reducer: {
    verify: verifyReducer,
    player: playerReducer,
    listMussic: listMusicReducer,
    login: loginReducer,
  },
});
