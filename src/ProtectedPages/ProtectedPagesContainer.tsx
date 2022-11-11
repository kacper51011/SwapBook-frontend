import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Pages/Home";
import { useDispatch } from "react-redux";
import { changeAuth } from "../store/authSlice";

const ProtectedPagesContainer = () => {
  const [auth, setAuth] = useState<Boolean>();
  const dispatch = useDispatch();

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

  let loggedIn = true;
  return loggedIn ? <Outlet /> : <Home />;
};

export default ProtectedPagesContainer;
