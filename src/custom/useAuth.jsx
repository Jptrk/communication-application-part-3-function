// Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// Actions
import { fetchUserToken } from "../features/userToken/userTokenSlice";

// Hook
export function useAuth() {
  const userList = useSelector((state) => state.userList.data);
  const dispatch = useDispatch();

  // Will do login verification
  // based on email and password
  const login = (email, password) => {
    const selectedAccount = userList.filter(
      (account) => account.email === email
    );

    // If selected account exists
    if (selectedAccount.length) {
      const selectedAccountInfo = selectedAccount[0];
      // Validate credentials
      if (
        selectedAccountInfo.email === email &&
        selectedAccountInfo.password === password
      ) {
        // Authorize
        const newToken = {
          email: selectedAccountInfo.email,
          id: selectedAccountInfo.id,
        };

        // Save
        localStorage.setItem("userToken", JSON.stringify(newToken));
        dispatch(fetchUserToken());
        return true;
      } else {
        // Unauthorize
        return false;
      }
    }
  };

  // Will remove userToken
  // and redirect
  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch(fetchUserToken());
  };

  return { login, logout };
}

export const RequireAuth = ({ children }) => {
  const userToken = useSelector((state) => state.userToken.data);
  const location = useLocation();
  // If logged out redirect to index
  return userToken ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export const NotRequireAuth = ({ children }) => {
  const userToken = useSelector((state) => state.userToken.data);
  const location = useLocation();

  // If logged in redirect to dashboard
  return !userToken ? (
    children
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};
