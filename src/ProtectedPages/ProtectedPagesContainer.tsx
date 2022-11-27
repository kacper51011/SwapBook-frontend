import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Pages/Home";
import { useDispatch } from "react-redux";
import { changeAuth } from "../store/authSlice";
import useAppProtection from "../hooks/useAppProtection";

const ProtectedPagesContainer = () => {
  const [auth] = useAppProtection();
  return auth ? <Outlet /> : <Home />;
};

export default ProtectedPagesContainer;
