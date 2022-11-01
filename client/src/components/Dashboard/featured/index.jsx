import React, { useEffect } from "react";
import "./index.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getToday } from "../../../redux/actions";

const Featured = () => {
  const today = useSelector((state) => state.today);
  let dispatch = useDispatch();
  let succeeded = today?.filter((item) => item.state === "succeeded");
  let suma = today && succeeded.reduce((acc, item) => acc + item.amount, 0);

  useEffect(() => {
    dispatch(getToday());
  }, [dispatch]);

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total</h1>
                < MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
              <div className="featuredchart">
                <CircularProgressbar  value={isNaN(succeeded.length / today.length) * 100 ? 0 : succeeded.length / today.length * 100} text={`${isNaN(succeeded.length / today.length) * 100 ? 0 : Math.round(succeeded.length / today.length * 100)}%`} />
              </div>
              <p className="title">Total sales made today</p>
              <p className="amount">${suma}</p>
            </div>
        </div>
    );
};

export default Featured;