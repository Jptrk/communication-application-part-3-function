// Libraries
import React, { useCallback, useState } from "react";

function useVisibility(initialState = false) {
  const [show, setShow] = useState(initialState);

  const toggle = useCallback((state) => {
    setShow(state);
  }, []);

  return [show, toggle];
}

export default useVisibility;
