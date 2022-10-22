import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateDataUserProfile } from "../../redux/actions";
import { uploadImage } from "../../utils/utils";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";

function UserProfile() {
  const [backGroundColor, setBackGroundColor] = useState("#201e1e");
  const [loading, setLoading] = useState(false);
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );
  const user = useSelector((state) => state.user);
  const [imageUser, setImageUser] = useState(
    user.profilePicture ||
      "https://electronicssoftware.net/wp-content/uploads/user.png"
  );
  let dispatch = useDispatch();
  const saveDataBackGround = (e) => {
    localStorage.setItem("backgroudProfile", e.target.value);
    setBackGroundColor(e.target.value);
  };
  const saveDataImageProfile = (e) => {
    uploadImage(e, setLoading, setImageUser);
  };
  const saveLocaleStorageImageProfile = (atribbute, data) => {
    dispatch(
      updateDataUserProfile(roleSignInSaveStorage.user?.id, atribbute, data)
    );
  };

  const getData = () => {
    return localStorage.getItem("backgroudProfile");
  };

  useEffect(() => {
    setBackGroundColor(getData());
    dispatch(getUserProfile(roleSignInSaveStorage.user.id));
  }, [dispatch, roleSignInSaveStorage.user.id]);

  return (
    <main className={styles.mainSectionUser}>
      <div className={styles.containerInformationUser}>
        <div className={styles.flexContainerPerfilUserTablet}>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.imageUserContainer}
          >
            <input
              type={"color"}
              value={backGroundColor}
              onChange={(e) => saveDataBackGround(e)}
            />
            <span className={styles.profileUserName}>{user.name}</span>
            <div className="container_file_upload_server">
              {loading ? (
                <img
                  src="https://acegif.com/wp-content/uploads/loading-11.gif"
                  alt="gift de carga"
                />
              ) : (
                <img src={imageUser} alt="logo User" />
              )}
              <div className={styles.uploadImageUserProfilesContainer}>
                <button
                  type="button"
                  className={`container_btn_file ${styles.container_btn_file_user} `}
                >
                  <label htmlFor="image">
                    <i className="bi bi-file-earmark-arrow-up"></i> Agregar foto
                    de perfil
                  </label>

                  <input
                    type="file"
                    onChange={saveDataImageProfile}
                    id="image"
                    name="image"
                  />
                </button>
                <button
                  onClick={() =>
                    saveLocaleStorageImageProfile("profilePicture", imageUser)
                  }
                  className={styles.uploadProfileImageUserButton}
                >
                  Upload
                </button>
                <button
                  className={styles.uploadProfileImageUserButton}
                  onClick={() => setImageUser(user.profilePicture)}
                >
                  cancel
                </button>
              </div>
            </div>
            <span className={styles.profileUserGmail}>{user.email}</span>
          </section>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.settingsProfile}
          >
            <label>FULLNAME</label>
            <span>{`${user.name} ${user.lastname}`}</span>
            <label>EMAIL</label>
            <span>{user.email}</span>
            <label>EDAD</label>
            <span>{user.age} years </span>
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
