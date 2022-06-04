import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
function WithAuthentication (Component){
   const { loggedinUser, setLoggedinUser } = useAuth();
   return function Authentication() {
      return loggedinUser ? <Component /> : <Navigate to="/" replace={true} />;
   };
};

export default WithAuthentication;
