import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";

const Signin = () => {
   const [userData, setUserData] = useState({});
   const inputs = [
      { value: "firstname", type: "text" },
      { value: "lastname", type: "text" },
      { value: "phone", type: "phone" },
      { value: "email", type: "email" },
      { value: "password", type: "password" },
   ];
   const dispatch = useDispatch();
   const handleSubmit = (userData) => {
      dispatch(signInUser(userData));
   };
   return (
      <div>
         <Form
            inputs={inputs}
            buttonName={"SignIn"}
            handleSubmit={handleSubmit}
            header={"REGISTER"}
         />
      </div>
   );
};

export default Signin;
