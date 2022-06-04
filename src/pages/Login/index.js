import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import Form from "../../components/Form";
import { useSelector } from "react-redux";
import Toastmessage from "../../components/ToastMessage";

const Login = () => {
   const inputs = [
      { value: "email", type: "emaild" },
      { value: "password", type: "text" },
   ];
   const Navigate = useNavigate();
   const users = useSelector((state) => state.users.users);
   const { loggedinUser, setLoggedinUser } = useAuth();
   console.log(setLoggedinUser);
   const handleSubmit = (userData) => {
      let isUser = users.filter(
         (user) =>
            user.userData.email === userData.email &&
            user.userData.password == userData.password
      );
      if (isUser.length > 0) {
         setLoggedinUser(isUser);
         Navigate("/dashboard", { replace: true });
      } else {
         Toastmessage("(:لطفا ابتدا ثبت نام کنید ");
      }
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
