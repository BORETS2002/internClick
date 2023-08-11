import { configureStore } from "@reduxjs/toolkit";
import countReduser from "../reducers/Count";
export default configureStore({
  reducer: countReduser,
  devTools: process.env.NODE_ENV !== "production",
});
