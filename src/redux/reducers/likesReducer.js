import { DEC, INC } from "../types/types";

export const initialState = {
  likes: 0,
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { ...state, likes: state.likes + 1 };
    case DEC:
      return { ...state, likes: state.likes - 1 };

    default:
      return state;
  }
};
