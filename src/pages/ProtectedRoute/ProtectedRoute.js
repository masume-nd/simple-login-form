import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
const Protectedroute = ({ children, ...props }) => {
   const user = useAuth();
   return (
      <Route
         {...props}
         render={() =>
            user ? children : <Navigate to="/login" replace={true} />
         }
      />
   );
};

export default Protectedroute;
