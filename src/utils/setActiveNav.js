// Actions
import { setActiveState } from "../features/controls/controlsSlice";
// Utils
import { formatPathName } from "./functions";

export const setActiveNav = (dispatch, pathName) => {
  const name = formatPathName(pathName);
  dispatch(setActiveState(name));
};
