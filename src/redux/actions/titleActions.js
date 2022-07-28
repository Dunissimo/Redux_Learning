import { INPUT_TEXT } from "../types/types";

export const inputText = (text) => ({
  type: INPUT_TEXT,
  payload: text,
});
