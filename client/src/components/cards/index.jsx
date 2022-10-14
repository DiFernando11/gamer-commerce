import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


export default function Card({image, name }) {
  return (
    <div >
       <Link className="ratybuton" to={`/home/:id`}> 
      <div  className="card">
        <img src={image} alt='img' className="cardImg"/>
        <div  className="cardInfo">
          <p  className="textTitle">{name} 19US</p>
         
        </div>
          </div>
          </Link>
        </div>  
   
  )
}