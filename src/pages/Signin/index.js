import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Signin = ({ data }) => {
   const inputs = [
      { value: "firstname", type: "text" },
      { value: "lastname", type: "text" },
      { value: "phone", type: "phone" },
   ];
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const handleSubmit = (userData) => {
      userData = {...userData, ...data };
      userData && dispatch(signInUser({ userData, id: uuidv4() }));
      Navigate("/dashboard", { replace: true });
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
