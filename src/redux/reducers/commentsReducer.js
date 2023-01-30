import { COMMENT_CREATE, COMMENT_DELETE, COMMENTS_LOAD } from "../types/types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.payload] };

    case COMMENT_DELETE:
      const { id } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === id);

      const newComments = [
        ...comments.slice(0, itemIndex),
        ...comments.slice(itemIndex + 1),
      ];

      return { ...state, comments: newComments };

    case COMMENTS_LOAD:
      const commentsNew = action.payload.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });
      return { ...state, comments: commentsNew };
    default:
      return state;
  }
};
