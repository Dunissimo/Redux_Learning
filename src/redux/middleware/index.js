import { commentsLoad } from "../actions/commentsActions";
import { loaderErrorOn } from "../actions/loaderActions";
import { COMMENT_CREATE } from "../types/types";

const badWords = ["козел", "осел", "лох"];

export const textFilter = (store) => {
  return (next) => (action) => {
    if (action.type === COMMENT_CREATE) {
      const hasBadWords = badWords.some((res) =>
        action.payload.text.toLowerCase().includes(res)
      );

      if (hasBadWords) {
        setTimeout(() => {
          store.dispatch(commentsLoad());
        }, 1000);

        return store.dispatch(loaderErrorOn("Уважайте людей"));
      }
    }
    return next(action);
  };
};
