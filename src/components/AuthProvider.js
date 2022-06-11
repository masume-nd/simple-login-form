import React, { createContext, useState, useContext,useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [loggedinUser, setLoggedinUser] = useState();
 
   return (
      <AuthContext.Provider value={{ loggedinUser, setLoggedinUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider
