import React from "react";

const Signin = () => {
   const inputs = ["firstname", "lastname", "phone", "email", "password"];
   return (
      <div>
         <Form inputs={inputs} buttonName={"SignIn"} />
      </div>
   );
};

export default Signin;
