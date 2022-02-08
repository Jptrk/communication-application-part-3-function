// Libraries
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function usePathname(pos) {
  const [pathname, setPathname] = useState();
  const location = useLocation();

  useEffect(() => {
    // Format path
    const str = location.pathname.split("/");
    setPathname(str[pos]);
  }, [location.pathname]);

  return pathname;
}

export default usePathname;
