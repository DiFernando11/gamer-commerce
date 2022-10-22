import React from "react";
import style from "../adminProfile/index.module.css"
import icon from "../.././../img/user (1).png"


function AdminProfile() {
  return (
  <div className={style.fonts}>
      <div className={style.contenedorimagen}>
        <img src={icon} className={style.imagen}
              height="150" 
              width={160}/>
      </div>
    <div className={style.pruebas}>
      <div className={style.forms}>
          <h1 className={style.parrafo}>Admin:Fernado quiroga</h1>
          <h2 className={style.par}>Email:quiroga@hotmail.com</h2>
          <h2 className={style.par}>Birthday:20/6/1993</h2>
          <h2 className={style.par}>location:Cali,Mexico</h2>
          <h2 className={style.par}>phone:351637897</h2>
          <h2 className={style.par}>Account created on:2022-10-20</h2>
      </div>    
    </div>
  </div>
  )
}

export default AdminProfile;
