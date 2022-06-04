import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import Form from "../../components/Form";
import { useSelector } from "react-redux";
import Toastmessage from "../../components/ToastMessage";

const Login = () => {
   const inputs = [
      { value: "email", type: "emaild" },
      { value: "password", type: "text" },
   ];
   const users = useSelector(state => state.users.users);
   const{ loggedinUser, setLoggedinUser } = useAuth()
   const handleSubmit = (userData) => {
      users.map(user => {
         user.userData.email == userData.email? setLoggedinUser(user): Toastmessage()
      })
    
   };
   return (
      <div>
         <Form
            inputs={inputs}
            buttonName={"LogIn"}
            handleSubmit={handleSubmit}
            header={"LOGIN"}
         />
      </div>
   );
};

export default Login;
