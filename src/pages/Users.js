import React, { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import styled from "styled-components";
const Button = styled("button")`
   padding: 8px 30px;
   border-radius: 20px;
   border: none;
`;
const Users = () => {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <>
         <Button onClick={() => setIsLogin(!isLogin)}>{isLogin?"register":"login"}</Button>
         {isLogin ? <Login /> : <Signin />}
      </>
   );
};

export default Users;
