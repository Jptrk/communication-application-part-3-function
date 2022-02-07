// Librarie
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// Actions
import { setActiveState } from "../features/controls/controlsSlice";
// Utils
import { formatPathName } from "../utils/functions";

function useNavigation() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();

  /*-------------------*/
  /*---- Functions ----*/
  /*-------------------*/
  const navigateActive = useCallback((path) => {
    const name = formatPathName(path);
    dispatch(setActiveState(name));
  }, []);

  return navigateActive;
}

export default useNavigation;
