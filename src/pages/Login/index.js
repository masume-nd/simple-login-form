import React from "react";
import Form from "../../components/Form";

const Login = () => {
   const inputs = ["username", "password"];
  //  const handleSubmit = () => {

  //  };
   return (
      <div>
         <Form inputs={inputs} buttonName={"LogIn"} />
      </div>
   );
};

export default Login;
