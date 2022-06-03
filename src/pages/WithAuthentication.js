import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
const WithAuthentication = ({ Component, ...props }) => {
   const user = useAuth();
   console.log(user);
   return function Authentication() {
      user ? <Component></Component> : <Navigate to="/login" replace={true} />;
   };
};

export default WithAuthentication;
