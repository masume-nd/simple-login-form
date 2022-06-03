import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import { signInUser } from "../../store/userSlice";
import { v4 as uuidv4 } from "uuid";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
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
      Toastify({
         text: "ثبت نام با موفقیت انجام شد :)",
         duration: 3000,
         destination: "https://github.com/apvarun/toastify-js",
         newWindow: true,
         close: true,
         gravity: "bottom", // `top` or `bottom`
         position: "right", // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
         style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
         },
         onClick: function () {}, // Callback after click
      }).showToast();
      userData && dispatch(signInUser({ userData, id: uuidv4() }));
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
