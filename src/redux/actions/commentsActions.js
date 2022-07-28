import { COMMENT_CREATE, COMMENTS_LOAD, COMMENT_DELETE } from "../types/types";
import { loaderErrorOn, loaderOff, loaderOn } from "./loaderActions";

export const commentCreate = (text, id) => ({
  type: COMMENT_CREATE,
  payload: { text, id },
});

export const commentDelete = (id) => ({
  type: COMMENT_DELETE,
  id,
});

export const commentsLoad = () => {
  return async (dispatch) => {
    dispatch(loaderOn());

    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: COMMENTS_LOAD, payload: data });
      })
      .catch((e) => {
        console.error(`Error in API >>> ${e.message}`);
        dispatch(loaderErrorOn("Error in API! Can't load comments."));
      });

    dispatch(loaderOff());
  };
};
