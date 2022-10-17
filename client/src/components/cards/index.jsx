import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


export default function Card({image, name }) {
  return (
    <div  >
       <Link className="ratybuton" to={`/home/:id`}> 
       <div>
      <img src={image} alt='img' className="cardImg"/>
      <span className="textTitle">{name}</span>
      <span className="cardInfo">   60$</span>
      <i className="bi bi-trash"></i>
    </div>
          </Link>
        </div>  
   
  )
}