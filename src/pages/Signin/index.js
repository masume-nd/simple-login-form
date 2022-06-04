import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Signin = () => {
   const [userData, setUserData] = useState({});
   const inputs = [
      { value: "firstname", type: "text" },
      { value: "lastname", type: "text" },
      { value: "phone", type: "phone" },
      { value: "email", type: "email" },
      { value: "password", type: "password" },
   ];
   const Navigate = useNavigate()
   const dispatch = useDispatch();
   const handleSubmit = (userData) => {
      userData && dispatch(signInUser({ userData, id: uuidv4() }));
      Navigate("/dashboard", {replace:true})
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
