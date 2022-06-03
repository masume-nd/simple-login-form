import React, { createContext, useState, useContext } from 'react';
const AuthContext  = createContext(null)

export const AuthProvider = ({user,children}) => {
  const [loggedinUser, setLoggedinUser] = useState(user)
  return (
    <AuthContext.Provider value={{loggedinUser, setLoggedinUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
