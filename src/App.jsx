// Libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
// Components
import DarkMode from "./components/theme/DarkMode";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Chat from "./pages/Chat/Chat";
import UserList from "./pages/ManageUsers/userList";
import EditUser from "./pages/ManageUsers/EditUser";
import ManageDocuments from "./pages/ManageDocuments/ManageDocuments";
import LoginSuccessful from "./pages/LoginSuccessful/LoginSuccessful";
// Actions
import { fetchUserList } from "./features/userList/userListSlice";
import { fetchUploadList } from "./features/uploadList/uploadListSlice";
// Hooks
import { RequireAuth, NotRequireAuth } from "./custom/useAuth";

function App() {
  /*-----------------*/
  /*--- Variables ---*/
  /*-----------------*/
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.controls.darkMode);
  const userToken = useSelector((state) => state.userToken.data);

  useEffect(() => {
    // Fetch data from localstorage
    dispatch(fetchUserList());
    dispatch(fetchUploadList());
  }, []);

  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <Routes>
        {/* Welcome */}
        <Route
          path="/"
          element={
            <NotRequireAuth>
              <Welcome />
            </NotRequireAuth>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <NotRequireAuth>
              <Login />
            </NotRequireAuth>
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            <NotRequireAuth>
              <Register />
            </NotRequireAuth>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* Chat */}
          <Route path="chat" element={<Chat />} />
          {/* User List */}
          <Route path="manageusers" element={<UserList />} />
          {/* Edit user */}
          <Route path="manageusers/:id" element={<EditUser />} />
          {/* Manage documents */}
          <Route path="managedocuments" element={<ManageDocuments />} />
          {/* Login successful */}
          <Route path="loginsuccessful" element={<LoginSuccessful />} />
        </Route>
      </Routes>
      {/* Theme toggle */}
      <DarkMode />
    </div>
  );
}

export default App;
