import styles from "../footer/index.module.css";
import insta from "../../source/instagram.png";
import tw from "../../source/unknown.png";
import fb from "../../source/facebookr.png";
import home from "../../source/house-xxl.png";
import fone from "../../source/mobile-phone-8-xxl.png";
import msj from "../../source/read-message-xxl.png";

export default function Footer() {
  return (
    <footer className={styles.containerpadre}>
      <div className={styles.containerbody}>
        <div className={styles.colum1}>
          <h1>About us </h1>
          <p>
            We are a video game digital distribution company Developed by Henry
            Corp. It was released in September 2022 with the aim of digitally
            selling your games, we offer protection against piracy, 100%
            protected and safe purchases. For to be able to enjoy all these
            services, it is necessary to be registered for the service by
            creating an account free, to which the video games purchased by the
            user are linked.
          </p>
        </div>
        <div className={styles.colum2}>
          <h1 className={styles.titleInformationPage}> Social networks </h1>
          <div
            className={`${styles.containerFlexSocialNetworks} ${styles.containerSocialNetworksLogos}`}
          >
            <div className={styles.row}>
              <img src={fb} alt="social networks" />
              <label>
                <span className={styles.textSocialMobile}>follow us on</span>{" "}
                facebook
              </label>
            </div>
            <div className={styles.row}>
              <img src={insta} alt="social networks" />
              <label>
                <span className={styles.textSocialMobile}>follow us on</span>{" "}
                instagram
              </label>
            </div>
            <div className={styles.row}>
              <img src={tw} alt="social networks" />
              <label>
                <span className={styles.textSocialMobile}>follow us on</span>{" "}
                twitter
              </label>
            </div>
          </div>
        </div>
        <div className={styles.colum3}>
          <h1 className={styles.titleInformationPage}> Contact information </h1>
          <div className={styles.containerFlexSocialNetworks}>
            <div className={styles.row2}>
              <img src={home} alt="social networks" />
              <label>Argentina, Buenos aires</label>
            </div>
            <div className={styles.row2}>
              <img src={fone} alt="social networks" />
              <label>+351-632-5881</label>
            </div>
            <div className={styles.row2}>
              <img src={msj} alt="social networks" />
              <label>game.loop.commerce@gmail.com</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerfooter}>
        <div className={styles.copyright}>© 2022 All Rights Reserved</div>
        <div className={styles.information}>
          <a href="#0">Company Information | </a>
          <a href="#0">privacy and policy | </a>
          <a href="#0">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
