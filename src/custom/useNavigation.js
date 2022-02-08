// Librarie
import React from "react";
import { useDispatch } from "react-redux";
// Actions
import { setActiveState } from "../features/controls/controlsSlice";

function useNavigation() {
  /*-------------------*/
  /*---- Variables ----*/
  /*-------------------*/
  const dispatch = useDispatch();
  /*-------------------*/
  /*---- Functions ----*/
  /*-------------------*/
  const navigateActive = (path) => {
    dispatch(setActiveState(path));
  };

  return navigateActive;
}

export default useNavigation;
