// Libraries
import { useCallback, useEffect, useState } from "react";

function useFetchData() {
  const [data, setData] = useState(null);

  // Note: Requires two arguments
  // the id, and the arrayData
  const fetchData = useCallback((id, arrData) => {
    const selectedData = arrData.filter((data) => data.id === parseInt(id))[0];

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
