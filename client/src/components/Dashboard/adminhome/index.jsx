import React from "react";
import "./index.scss"
import SideBar from "../../side-bar";


const adminHome = () => {
    return (
        <div className="homeAdmin" >
            <SideBar/>
            <div className="homeContainerAdmin">container</div>
        </div>
    );
};

export default adminHome;