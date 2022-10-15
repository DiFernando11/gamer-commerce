import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { GetPokemonByID, cleandetail } from "../../Redux/Actions/index";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import styles from "../descripcion/index.module.css";




// export default function Detail() {
//     const{id} = useParams()
//     const dispatch = useDispatch() 
//     useEffect (() => {
//        dispatch(cleandetail())
//      dispatch(GetGameByID(id))
     
      
//      },[]) 
//    const myGame= useSelector((state) => state.details)
//    console.log('estos son los detalles',myGame);
export default function Descripcion (){

  const game = useSelector((state) => state.Details);
    return (
 <div className = {styles.containerpadre}>
     <div className = {styles.containerbody}>
        <div className = {styles.colum1}>
            <h1>Description of game</h1>
            <p>
            {game.description? game.description : "No hay descripción"}
            </p>
            <div className = {styles.containerfooter}>
        <div className = {styles.copyright}>
            {game.name}
        </div>
        <div className = {styles.information}>
        <button  className= {styles.button}>agregar al carrito</button>
        </div>


     </div>

         </div>
         <div className = {styles.colum2}>
            <h1> Categories </h1>
            <div className = {styles.row}>
                {
                    game.genres?.map((genre, index) => (
                        <label key={index}>
                            {genre.name}
                        </label>
                    ))
                }
            </div>
            
         </div>
         <div className = {styles.colum3}>
            <h1> Minimum Requirements </h1>

            <div className = {styles.row2}>
                
                <label>
                    {game.requirements_min? game.requirements_min : "No hay requerimientos"}
                </label>
            </div>
           
         </div>
     </div>
    
  </div>
    )
    
}