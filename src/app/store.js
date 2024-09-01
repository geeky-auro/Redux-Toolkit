// How to create a store, in order to do so there's something called configure store

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../feature/todo/todoSlice";

export const store = configureStore({
    // Note we can rename todoReducer to anyName its just to bring the whole reducer ;)
  reducer: todoReducer,
});

