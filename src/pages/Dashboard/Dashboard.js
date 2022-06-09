import React from "react";
import styled from "styled-components";
import { useAuth } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
const Button = styled("button")`
   padding: 8px 30px;
   border-radius: 20px;
   border: none;
`;

const Dashboard = () => {
   const { loggedinUser, setLoggedinUser } = useAuth();
   const Navigate = useNavigate()
   const handleClick = () => {
      setLoggedinUser(null);
      Navigate("/", {replace: true})
   };
   return (
      <div>
         <h2>{`hello ${loggedinUser[0]?.userData?.firstname+" "+loggedinUser[0]?.userData?.lastname}`}</h2>
         <h2>{loggedinUser[0]?.userData?.email}</h2>
         <h2>{loggedinUser[0]?.userData?.phone}</h2>
         <Button onClick={handleClick}>LogOut</Button>
      </div>
   );
};

export default Dashboard;
