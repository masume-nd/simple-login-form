import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import Form from "../../components/Form";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import Signin from "../Signin";
const Login = () => {
   const [signUp, setSignUp] = useState(false);
   const [emailPass, setEmailPass] = useState([]);
   const inputs = [
      { value: "email", type: "emaild" },
      { value: "password", type: "text" },
   ];
   const Navigate = useNavigate();
   const users = useSelector((state) => state.users.users);
   const { loggedinUser, setLoggedinUser } = useAuth();
   const handleSubmit = (userData) => {
      let isUser = users.filter(
         (user) =>
            user.userData.email === userData.email &&
            user.userData.password == userData.password
      );
      if (isUser.length > 0) {
         setLoggedinUser(isUser[0].id);
         Navigate("/dashboard", { replace: true });
      } else {
         setEmailPass({userData, id: uuidv4()})
         setSignUp(true);
      }
   };
   return (
      <div>
         {signUp ? (
            <Signin data={emailPass}/>
         ) : (
            <Form
               inputs={inputs}
               buttonName={"LogIn"}
               handleSubmit={handleSubmit}
               header={"LOGIN"}
            />
         )}
      </div>
   );
};

export default Login;
