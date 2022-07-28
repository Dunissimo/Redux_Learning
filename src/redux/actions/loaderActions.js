import {
  LOADER_DISPLAY_ERROR,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from "../types/types";

export const loaderOn = () => ({
  type: LOADER_DISPLAY_ON,
});

export const loaderOff = () => ({
  type: LOADER_DISPLAY_OFF,
});

export const loaderErrorOn = (message) => ({
  type: LOADER_DISPLAY_ERROR,
  payload: message,
});
