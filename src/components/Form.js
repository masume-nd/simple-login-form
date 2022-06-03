import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormInput = styled("form")`
   width: 35vw;
   margin: 3rem auto;
   text-align: center;
   padding: 1rem;
   background: linear-gradient(to right, #654ea3, #eaafc8);
   border-radius: 10px;
`;
const MyInput = styled("input")`
   padding: 10px;
   width: 80%;
   border: none;
   border-radius: 10px;
   margin: 10px;
`;
const Button = styled("button")`
   padding: 8px 30px;
   border-radius: 20px;
   border: none;
`;
const Form = (props) => {
   const { inputs, buttonName, handleSubmit } = props;
   const [userData, setUserData] = useState({});
   const handleSubmitting = (e) => {
      setUserData(e.target.value);
   };
   useEffect(() => {
      handleSubmit(userData);
   }, [userData]);
   return (
      <FormInput onSubmit={handleSubmitting}>
         {inputs.map((item) => {
            switch (item) {
               case "password":
                  return (
                     <MyInput type="password" key={item} placeholder={item} />
                  );
               case "phone":
                  return <MyInput type="phone" key={item} placeholder={item} />;
               case "email":
                  return <MyInput type="email" key={item} placeholder={item} />;
               default:
                  return <MyInput type="text" key={item} placeholder={item} />;
            }
         })}
         <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "none" }}
         >
            <Button type="submit">{buttonName}</Button>
         </Link>
      </FormInput>
   );
};

export default Form;
