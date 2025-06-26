import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../shared/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }
  // if (user && user?.user.email)
  // if (user && user?.email)
  // if (user?.email)
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
