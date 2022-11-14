import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Pages/Home";
import { useDispatch } from "react-redux";
import { changeAuth } from "../store/authSlice";

const ProtectedPagesContainer = () => {
  // state of the auth is set to true on default, because links to this routes will be shown only if user is set in redux
  // true initial value prevents unecessary bugs or page reloads
  // I decided to not put the token check in redux, cause its a feature that touch only protected pages
  const [auth, setAuth] = useState(true);
  const dispatch = useDispatch();

  // if token is not true, then user state in redux is changed to "" which is falsey, also both storages will be cleared( may be changed later)
  useEffect(() => {
    axios.get("/api/users/getToken").then((data) => {
      if (data.data.auth === true) {
        setAuth(true);
      } else {
        setAuth(false);
        dispatch(changeAuth(""));
        localStorage.clear();
        sessionStorage.clear();
      }
    });
  }, [auth]);

  return auth ? <Outlet /> : <Home />;
};

export default ProtectedPagesContainer;
