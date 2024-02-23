import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
