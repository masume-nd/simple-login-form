import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Button = styled("button")`
   padding: 8px 30px;
   border-radius: 20px;
   border: none;
`;

const Dashboard = () => {
   const { loggedinUser, setLoggedinUser } = useAuth();
   localStorage.setItem("userId", loggedinUser);
   const useId = localStorage.getItem("userId");
   const datas = useSelector((state) => state.users.users);
   const userInfo = datas.filter((el) => el.id === useId);
   const Navigate = useNavigate();
  
   const handleClick = () => {
      setLoggedinUser(null);
      Navigate("/", { replace: true });
   };
   return (
      <div>
         <h2>{`hello beautiful < ${
            userInfo[0]?.firstname + " " + userInfo[0]?.lastname
         } >`}</h2>
         <h2>{userInfo[0]?.userData?.email}</h2>
         <h2>{userInfo[0]?.phone}</h2>
         <Button onClick={handleClick}>LogOut</Button>
      </div>
   );
};

export default Dashboard;
