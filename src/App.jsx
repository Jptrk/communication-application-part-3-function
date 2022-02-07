// Libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
// Components
import DarkMode from "./components/theme/DarkMode";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Chat from "./pages/Chat/Chat";
// Actions
import { fetchUserList } from "./features/userList/userListSlice";
import { fetchUploadList } from "./features/uploadList/uploadListSlice";

function App() {
  /*-----------------*/
  /*--- Variables ---*/
  /*-----------------*/
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.controls.darkMode);
  const location = useLocation();

  useEffect(() => {
    // Fetch data from localstorage
    dispatch(fetchUserList());
    dispatch(fetchUploadList());
  }, []);

  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <Routes>
        {/* Welcome */}
        <Route path="/" element={<Welcome />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Register */}
        <Route path="/register" element={<Register />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Chat */}
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
      {/* Theme toggle */}
      <DarkMode />
    </div>
  );
}

export default App;
