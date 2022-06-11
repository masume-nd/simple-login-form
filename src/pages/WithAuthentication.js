import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
function WithAuthentication(Component) {
   const { loggedinUser, setLoggedinUser } = useAuth();
   console.log(loggedinUser);
  
   return function Authentication() {
      return savedId ? <Component /> : <Navigate to="/" replace={true} />;
   };
}

export default WithAuthentication;
