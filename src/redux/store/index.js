import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { textFilter } from "../middleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, textFilter],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
