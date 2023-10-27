import counterSlice from "./slice/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});

export default store;
