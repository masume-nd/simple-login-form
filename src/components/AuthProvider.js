import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ users, children }) => {
   const [loggedinUser, setLoggedinUser] = useState(users);

   return (
      <AuthContext.Provider value={{ loggedinUser, setLoggedinUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
