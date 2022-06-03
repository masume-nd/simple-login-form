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
const FormHeader = styled("h1")`
   color: white;
`;
const Form = (props) => {
   const { inputs, buttonName, handleSubmit, header } = props;
   const [userData, setUserData] = useState({});
   const [disable, setDisable] = useState(false);
   const phoneRegEx =
      /(0|\\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
   const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   const changeHandler = (e) => {
      // if (e.target.name === "phone" && e.target.name.match(phoneRegEx)) {
      //    setUserData({ ...userData, [e.target.name]: e.target.value });
      // }
      // if (e.target.name === "email" && e.target.name.match(emailRegEx)) {
      //    setUserData({ ...userData, [e.target.name]: e.target.value });
      // }
      setUserData({ ...userData, [e.target.name]: e.target.value });

   };
   return (
      <FormInput
         onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userData);
            console.log(userData);
            e.target.reset();
         }}
      >
         <FormHeader>{header}</FormHeader>
         {inputs.map((item) => {
            return (
               <MyInput
                  onChange={(e) => changeHandler(e)}
                  type={item.type}
                  key={item.value}
                  name={item.value}
                  value={userData?.item}
                  placeholder={item.value}
                  required
               />
            );
         })}
         {/* <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "none" }}
         > */}
         <Button type="submit">{buttonName}</Button>
         {/* </Link> */}
      </FormInput>
   );
};

export default Form;
