import styles from "../footer/index.module.css";
import insta from "../../source/instagram.png";
import tw from "../../source/unknown.png";
import fb from "../../source/facebookr.png";
import home from "../../source/house.png";
import fone from "../../source/mobile.png";
import msj from "../../source/facebook.png";

export default function Footer() {
  return (
    <footer className={styles.containerpadre}>
      <div className={styles.containerbody}>
        <div className={styles.colum1}>
          <h1> A cerca de nosotros </h1>
          <p>
            Somos una compañia de distribución digital de videojuegos
            desarrollada por Henry Corporation. Fue lanzada en septiembre de
            2022 con el objetivo de la venta digital de sus juegos, ofrecemos
            protección contra piratería,compras 100% protegidas y seguras. Para
            poder disfrutar de todos estos servicios, es necesario estar
            registrado en el servicio mediante la creación de una cuenta
            gratuita, a la que se vinculan los videojuegos comprados por el
            jugador.
          </p>
        </div>
        <div className={styles.colum2}>
          <h1> Redes sociales </h1>

          <div className={styles.row}>
            <img src={fb} alt="social networks" />
            <label>Siguenos en Facebook</label>
          </div>
          <div className={styles.row}>
            <img src={insta} alt="social networks" />
            <label>Siguenos en Instagram</label>
          </div>
          <div className={styles.row}>
            <img src={tw} alt="social networks" />
            <label>Siguenos en Twitter</label>
          </div>
        </div>
        <div className={styles.colum3}>
          <h1> Informacion de contacto </h1>

          <div className={styles.row2}>
            <img src={home} alt="social networks" />
            <label>
              Argentina, Buenos aires, Capital federal, Corrientes 270.
            </label>
          </div>
          <div className={styles.row2}>
            <img src={fone} alt="social networks" />
            <label>+351-632-5881</label>
          </div>
          <div className={styles.row2}>
            <img src={msj} alt="social networks" />
            <label>compragamer@hotmail.com</label>
          </div>
        </div>
      </div>
      <div className={styles.containerfooter}>
        <div className={styles.copyright}>
          © 2022 Todos los Derechos Reservados
        </div>
        <div className={styles.information}>
          <a href="#0">Informacion de Compañia |</a>
          <a href="#0">Privacidad y politica|</a>
          <a href="#0">Terminos y Condiciones|</a>
        </div>
      </div>
    </footer>
  );
}
