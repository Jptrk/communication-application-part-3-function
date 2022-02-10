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

  // This will return the selected data
  // instead of setting the data state
  const returnFetchedData = (id, arrData, property) => {
    const selectedData = arrData.filter(
      (data) => data[property] === parseInt(id)
    )[0];

    if (selectedData) {
      return selectedData;
    } else {
      return false;
    }
  };

  return [data, fetchData, returnFetchedData];
}

export default useFetchData;
