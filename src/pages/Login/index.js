import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";

const Login = () => {
   const inputs = ["username", "password"];
   const dispatch = useDispatch();
   const handleSubmit = (userData) => {
      dispatch(signInUser(userData));
   };
   return (
      <div>
         <Form inputs={inputs} buttonName={"LogIn"} handleSubmit={handleSubmit} />
      </div>
   );
};

export default Login;
