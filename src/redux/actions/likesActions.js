import { INC, DEC } from "../types/types";

export const incrementLikes = () => ({
  type: INC,
});

export const decrementLikes = () => ({
  type: DEC,
});
