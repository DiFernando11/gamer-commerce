import React, { useEffect, useState } from "react";
import { uploadImage } from "../../utils/utils";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";

function UserProfile() {
  const [backGroundColor, setBackGroundColor] = useState("#201e1e");
  const [imageUseLocaleStorage, setImageUseLocaleStorage] = useState("");
  const [imageUser, setImageUser] = useState("");
  const [loading, setLoading] = useState(false);

  const saveDataBackGround = (e) => {
    localStorage.setItem("backgroudProfile", e.target.value);
    setBackGroundColor(e.target.value);
  };
  const saveDataImageProfile = (e) => {
    uploadImage(e, setLoading, setImageUser);
    // localStorage.setItem("imageUser", imageUser);
  };
  const saveLocaleStorageImageProfile = () => {
    localStorage.setItem("imageUser", imageUser);
  };
  const getData = () => {
    return localStorage.getItem("backgroudProfile");
  };
  const getDataImageUser = () => {
    return localStorage.getItem("imageUser");
  };
  useEffect(() => {
    setBackGroundColor(getData());
  }, [backGroundColor]);
  const handleValueUserImage = () => {
    setImageUseLocaleStorage(getDataImageUser());
  };
  useEffect(() => {
    handleValueUserImage();
  }, [imageUser]);

  console.log(imageUseLocaleStorage, "locale");
  var cat = localStorage.getItem("imageUser");
  console.log(cat, "cat");
  // console.log(imageUser, "value");

  return (
    <main className={styles.mainSectionUser}>
      <div className={styles.containerInformationUser}>
        <div className={styles.flexContainerPerfilUserTablet}>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.imageUserContainer}
          >
            <h4>PERFIL</h4>
            <div className="container_file_upload_server">
              {loading ? (
                <img
                  src="https://acegif.com/wp-content/uploads/loading-11.gif"
                  alt="gift de carga"
                />
              ) : (
                <img
                  src={`${
                    imageUseLocaleStorage
                      ? imageUseLocaleStorage
                      : "https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png"
                  }`}
                />
              )}
              <button type="button" className="container_btn_file">
                <label htmlFor="image">
                  <i className="bi bi-file-earmark-arrow-up"></i> Adjuntar
                  archivo
                </label>

                <input
                  type="file"
                  onChange={saveDataImageProfile}
                  id="image"
                  name="image"
                />
              </button>
              <button onClick={saveLocaleStorageImageProfile}>Subir</button>
            </div>

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
