import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeState: "",
  darkMode: true,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setActiveState: (state, action) => {
      state.activeState = action.payload;
    },
  },
});

export const { toggleTheme, setActiveState } = controlsSlice.actions;
export default controlsSlice.reducer;
