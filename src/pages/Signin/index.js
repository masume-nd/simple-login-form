import React from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";
import { useAuth } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Toastmessage from "../../components/ToastMessage";
const Signin = ({ data }) => {
   const inputs = [
      { value: "firstname", type: "text" },
      { value: "lastname", type: "text" },
      { value: "phone", type: "phone" },
   ];
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const { loggedinUser, setLoggedinUser } = useAuth();
   const handleSubmit = (userData) => {
      userData = { ...userData, ...data };
      userData && dispatch(signInUser(userData));
      console.log(data?.id);
      setLoggedinUser(data?.id);
      Navigate("/dashboard", { replace: true });
      <Toastmessage message={"ثبت نام با موفقیت انجام شد:)"} />;
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
