import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetPokemonByID, cleandetail } from "../../Redux/Actions/index";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import styles from "../descripcion/descripcion.module.css";

// export default function Detail() {
//     const{id} = useParams()
//     const dispatch = useDispatch()
//     useEffect (() => {
//        dispatch(cleandetail())
//      dispatch(GetGameByID(id))

//      },[])
//    const myGame= useSelector((state) => state.details)
//    console.log('estos son los detalles',myGame);
export default function Descripcion() {
  return (
    <section className={styles.containerpadre}>
      <div className={styles.containerbody}>
        <div className={styles.colum1}>
          <h1>descripción del juego </h1>
          <p>
            Los Santos, una extensa metrópolis llena de gurús de autoayuda,
            aspirantes a estrellas y famosos en decadencia tratando de
            mantenerse a flote en una era de incertidumbre económica y tele por
            cable barata. En medio de esta confusión, tres criminales muy
            distintos lo arriesgan todo en una serie de audaces y peligrosos
            asaltos que podrían solucionarles la vida.
          </p>
          <div className={styles.containerfooter}>
            <div className={styles.copyright}>Gta 5</div>
            <div className={styles.information}>
              <button className={styles.button}>agregar al carrito</button>
            </div>
          </div>
        </div>
        <div className={styles.colum2}>
          <h1> Generos </h1>

          <div className={styles.row}>
            <label>Accion</label>
          </div>
          <div className={styles.row}>
            <label>aventura</label>
          </div>
          <div className={styles.row}>
            <label>estrategia</label>
          </div>
        </div>
        <div className={styles.colum3}>
          <h1> requerimientos minimos </h1>

          <div className={styles.row2}>
            <label>
              MÍNIMO: SO: Windows 7 o posterior Procesador: Intel o AMD de doble
              núcleo de 64 bits a 2.8 GHz Memoria: 4 GB de RAM Gráficos: NVIDIA
              GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 DirectX: Versión
              9.0c Red: Conexión de banda ancha a Internet Almacenamiento: 15 GB
              de espacio disponible Tarjeta de sonido: Compatible con DirectX
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
