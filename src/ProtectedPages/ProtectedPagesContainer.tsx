import { Outlet } from "react-router-dom";

import Home from "../Pages/Home";

import useAppProtection from "../hooks/useAppProtection";

const ProtectedPagesContainer = () => {
  const [auth] = useAppProtection();
  return auth ? <Outlet /> : <Home />;
};

export default ProtectedPagesContainer;
