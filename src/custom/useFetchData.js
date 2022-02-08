// Libraries
import { useCallback, useState } from "react";

function useFetchData() {
  const [data, setData] = useState(null);

  // Note: Requires three arguments
  // the id, the arrayData, and the property
  // Value that you want to compare
  const fetchData = useCallback((id, arrData, property) => {
    const selectedData = arrData.filter(
      (data) => data[property] === parseInt(id)
    )[0];

    if (selectedData) {
      setData(selectedData);
      return true;
    } else {
      setData(null);
      return false;
    }
  }, []);

  return [data, fetchData];
}

export default useFetchData;
