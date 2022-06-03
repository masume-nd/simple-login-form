import React from "react";

const Signin = () => {
  const inputs = ["firstname", "lastname", ]
   return (
      <div>
         <Form inputs={inputs} buttonName={"Login"} />
      </div>
   );
};

export default Signin;
