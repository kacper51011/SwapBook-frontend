import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedPagesContainer = () => {
  let loggedIn = true;
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedPagesContainer;
