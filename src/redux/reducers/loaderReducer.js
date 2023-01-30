import {
  LOADER_DISPLAY_ERROR,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from "../types/types";

const initialState = {
  loading: true,
  error: false,
  message: "",
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return { ...state, loading: true, error: false, message: "" };

    case LOADER_DISPLAY_OFF:
      return { ...state, loading: false, error: false, message: "" };
    case LOADER_DISPLAY_ERROR:
      return { ...state, loadig: false, error: true, message: action.payload };

    default:
      return state;
  }
};
