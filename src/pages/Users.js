import React, { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import styled from "styled-components";
const BtnContainer = styled("div")`
   width: 100%;
   margin: auto;
   text-align: center;
`
const Button = styled("button")`
   margin-top: 1rem;
   padding: 10px 50px;
   border-radius: 30px;
   border: none;
   background: #eaafc8;
   color: white;
   font-size: 16px;
`;
const Users = () => {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <>
         <BtnContainer>
            <Button onClick={() => setIsLogin(!isLogin)}>
               {isLogin ? "register" : "login"}
            </Button>
         </BtnContainer>
         {isLogin ? <Login /> : <Signin />}
      </>
   );
};

export default Users;
