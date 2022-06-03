import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";

const Signin = () => {
  // const [userData, setUserData] = useState({})
  const inputs = ["firstname", "lastname", "phone", "email", "password"];
   const dispatch = useDispatch();
   const handleSubmit = (userData) => {
      dispatch(signInUser(userData));
   };
   return (
      <div>
         <Form inputs={inputs} buttonName={"SignIn"} handleSubmit={handleSubmit}/>
      </div>
   );
};

export default Signin;
