import React from "react";
import "./index.scss";


const Widgets = ({content1 }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="tittle">{content1.title}</span>
        <span className="counter">{content1.counter}</span>
        <span className="link">{content1.link}</span>
      </div>
      <div className="right">
          {content1.icon}
      </div>
    </div>
  );
};

export default Widgets;