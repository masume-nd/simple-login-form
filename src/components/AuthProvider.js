import React, { createContext, useState, useContext } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [loggedinUser, setLoggedinUser] = useState(null);

   return (
      <AuthContext.Provider value={{ loggedinUser, setLoggedinUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider
