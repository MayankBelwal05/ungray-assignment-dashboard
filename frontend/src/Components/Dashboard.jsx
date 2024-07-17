import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentThree from "./ComponentThree";
import ComponentTwo from "./ComponentTwo";
import CompnentFive from "./CompnentFive";
import ComponentOne from "./ComponentOne";
import ComponentFour from "./ComponentFour";
import SideBar from "./Sidebar";
import ComponentSix from "./ComponentSix";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/");
  };


  return (
    <div className="flex bg-gray-200 w-full" style={{borderRadius:'20px'}}>
      <div className="p-2" style={{width:'240px'}}>
        <SideBar />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="p-3 mt-2" style={{backgroundColor:'white',borderRadius:'20px',width:'800px'}}>
          <ComponentOne />
          <ComponentTwo />
        <ComponentSix/>
        </div>

        <div className="mx-2" style={{width:'310px'}}>
          <ComponentThree /><ComponentFour /><CompnentFive />
        </div>
      </div>

     

    </div>
  );
};

export default Dashboard;
