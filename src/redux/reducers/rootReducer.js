import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { likesReducer } from "./likesReducer";
import { commentsReducer } from "./commentsReducer";
import { loaderReducer } from "./loaderReducer";

export const rootReducer = combineReducers({
  likesReducer,
  titleReducer,
  commentsReducer,
  loaderReducer,
});
