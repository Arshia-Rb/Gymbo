import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const { isAuth } = useContext(AuthContext)!;

  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
