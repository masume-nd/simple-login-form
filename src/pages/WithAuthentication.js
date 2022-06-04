import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
const WithAuthentication = ({ Component, ...props }) => {
   const  loggedinUser= useAuth();
   console.log(loggedinUser);
   return function Authentication() {
      loggedinUser ? <Component></Component> : <Navigate to="/login" replace={true} />;
   };
};

export default WithAuthentication;
