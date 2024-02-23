import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice";
import userReducer from "../userSlice/userSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, postReducer);

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
