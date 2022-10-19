import React, { useEffect, useState } from "react";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";

function UserProfile() {
  const [backGroundColor, setBackGroundColor] = useState(
    "#201e1e"
  );

  const saveDataBackGround = (e) => {
    localStorage.setItem("backgroudProfile", e.target.value);
    setBackGroundColor(e.target.value);
  };
  const getData = () => {
    return localStorage.getItem("backgroudProfile");
  };
  useEffect(() => {
    setBackGroundColor(getData());
  }, [backGroundColor]);
  console.log(backGroundColor);
  return (
    <main className={styles.mainSectionUser}>
      <div className={styles.containerInformationUser}>
        <div>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.imageUserContainer}
          >
            <h4>PERFIL</h4>
            <input
              type={"color"}
              value={backGroundColor}
              onChange={(e) => saveDataBackGround(e)}
            />
            <img
              src="https://electronicssoftware.net/wp-content/uploads/user.png"
              alt="user banner"
            />
            <span className={styles.profileUserName}>Diego Apolo</span>
            <span className={styles.profileUserGmail}>
              diegoapolo2011@gmail.com
            </span>
          </section>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.settingsProfile}
          >
            <label>FULLNAME</label>
            <span>Diego Fernando Apolo Guachizaca </span>
            <label>EMAIL</label>
            <span>diegoapolo2011@gmail.com</span>
            <label>EDAD</label>
            <span>20 años </span>
            <div className={styles.containerFlexEdit}>
              <div>
                <label>CONTRASEÑA </label>
                <span>************* </span>
              </div>
              <button>
                Editar Perfil <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          </section>
        </div>
        <div className={styles.containerCardsSection}>
          <div className={styles.container_flex_register}>
            <section
              style={{ backgroundColor: backGroundColor }}
              className={styles.yourShopping}
            >
              <h1>Tus compras</h1>
              <div className={styles.containerShoopinCards}>
                <div className={styles.containerShoopinCard}>
                  <CardPruchaseGame
                    game={{
                      name: "GTA 5",
                      price: 60,
                      image:
                        "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                    }}
                  />
                </div>
                <div className={styles.containerShoopinCard}>
                  <CardPruchaseGame
                    game={{
                      name: "GTA 5",
                      price: 60,
                      image:
                        "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                    }}
                  />
                </div>
                <div className={styles.containerShoopinCard}>
                  <CardPruchaseGame
                    game={{
                      name: "GTA 5",
                      price: 60,
                      image:
                        "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.yourFavorites}
          >
            <h1>Tus Favoritos</h1>

            <div className={styles.containerShoopinCards}>
              <div className={styles.containerShoopinCard}>
                <CardPruchaseGame
                  game={{
                    name: "GTA 5",
                    price: 60,
                    image:
                      "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                  }}
                />
              </div>
              <div className={styles.containerShoopinCard}>
                <CardPruchaseGame
                  game={{
                    name: "GTA 5",
                    price: 60,
                    image:
                      "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                  }}
                />
              </div>
              <div className={styles.containerShoopinCard}>
                <CardPruchaseGame
                  game={{
                    name: "GTA 5",
                    price: 60,
                    image:
                      "https://i.blogs.es/dfbccc/trucosgtavps4/450_1000.webp",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
