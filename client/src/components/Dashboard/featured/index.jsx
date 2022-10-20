import React from "react";
import "./index.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total</h1>s
                < MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
              <div className="featuredchart">
                <CircularProgressbar  value={50} text="50%"/>
              </div>
              <p className="title">Total sales made today</p>
              <p className="amount">$200</p>
            </div>
        </div>
    );
};

export default Featured;