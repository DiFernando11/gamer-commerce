import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateDataUserProfile } from "../../redux/actions";
import { uploadImage } from "../../utils/utils";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";
import Swal from "sweetalert2";

function UserProfile() {
  const [videoGameFavorite, setVideoGameFavorite] = useState([]);
  const [backGroundColor, setBackGroundColor] = useState("#201e1e");
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [alert, setAlert] = useState(true);
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );
  const refreshUpdate = useSelector((state) => state.stateRefreshUpdate);
  const user = useSelector((state) => state.user);
  console.log(user);
  const [imageUser, setImageUser] = useState(user.profilePicture);
  let dispatch = useDispatch();

  const saveDataBackGround = (e) => {
    localStorage.setItem("backgroudProfile", e.target.value);
    setBackGroundColor(e.target.value);
  };
  const saveDataImageProfile = (e) => {
    uploadImage(e, setLoading, setImageUser);
    setIsUpload(true);
    setAlert(true);
  };
  const saveLocaleStorageImageProfile = () => {
    dispatch(
      updateDataUserProfile(
        roleSignInSaveStorage.user?.id,
        "profilePicture",
        imageUser
      )
    );
    setIsUpload(true);
    handleAlert();
  };
  const getData = () => {
    return localStorage.getItem("backgroudProfile");
  };
  const handleAlert = () => {
    Swal.fire({
      text: "Changes were saved successfully",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Accept",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsUpload(false);
      }
    });
  };
  const handleCancelSaveChangesImage = () => {
    setImageUser(user.profilePicture);
    setIsUpload(false);
  };

  const filterPurschasedSucces = user?.orders?.filter(
    (game) => game.state === "succeeded" && game.games
  );
  const gamesPurchasedUserProfile = filterPurschasedSucces
    .map((game) => game.games)
    .flat();
  const totalAmountPurchased = filterPurschasedSucces.reduce(
    (current, nextCurrent) => current + nextCurrent.amount,
    0
  );
  const totalGamesPurchased = gamesPurchasedUserProfile.length;
  const getDataFavorites = () => {
    return JSON.parse(localStorage.getItem("favorite"));
  };
  const handleSweetAlert = (img) => {
    Swal.fire({
      icon: "question",
      title: "Would you like to save the changes?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
      imageUrl: img,
      imageHeight: 200,
      imageWidth: 400,
    }).then((response) => {
      if (response.isConfirmed) {
        saveLocaleStorageImageProfile();
        setAlert(false);
      }
      if (response.isDenied) {
        handleCancelSaveChangesImage();
      }
    });
  };
  useEffect(() => {
    setBackGroundColor(getData());
    dispatch(getUserProfile(roleSignInSaveStorage.user.id));
    setVideoGameFavorite(getDataFavorites);
  }, [dispatch, roleSignInSaveStorage.user.id, isUpload, refreshUpdate]);

  return (
    <main className={styles.mainSectionUser}>
      <div className={styles.containerInformationUser}>
        <div className={styles.flexContainerPerfilUserTablet}>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.imageUserContainer}
          >
            <input type={"color"} onChange={(e) => saveDataBackGround(e)} />
            <span className={styles.profileUserName}>{user.name}</span>

            {loading ? (
              <img
                src="https://acegif.com/wp-content/uploads/loading-11.gif"
                alt="gift de carga"
              />
            ) : (
              <>
                <img src={imageUser} alt="logo User" />
                {imageUser !== user.profilePicture &&
                  alert &&
                  handleSweetAlert(imageUser)}
              </>
            )}
            <div className={styles.uploadImageUserProfilesContainer}>
              {!isUpload ? (
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
              ) : (
                <div className={styles.container_button_confirmedChanges}>
                  <button
                    onClick={saveLocaleStorageImageProfile}
                    className={`${styles.uploadProfileImageUserButton} ${
                      loading && styles.disabledUploadImage
                    }`}
                  >
                    {loading ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                  <button
                    onClick={handleCancelSaveChangesImage}
                    className={`${styles.uploadProfileImageUserButton} ${
                      loading && styles.disabledUploadImage
                    }`}
                  >
                    {loading ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="sr-only"></span>
                      </div>
                    ) : (
                      "Cancel"
                    )}
                  </button>
                </div>
              )}
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
              <h1>Tus compras: {totalAmountPurchased}$</h1>
              <span className={styles.purchasedTotalGames}>
                Juegos comprados {totalGamesPurchased}
              </span>
              <div className={styles.containerShoopinCards}>
                {gamesPurchasedUserProfile?.length &&
                  gamesPurchasedUserProfile.map((game, index) => (
                    <div key={index} className={styles.containerShoopinCard}>
                      <CardPruchaseGame game={game} section={"purchased"} />
                    </div>
                  ))}
              </div>
            </section>
          </div>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.yourFavorites}
          >
            <h1>Tus Favoritos</h1>

            <div className={styles.containerShoopinCards}>
              {videoGameFavorite?.length &&
                videoGameFavorite.map((game) => (
                  <div className={styles.containerShoopinCard}>
                    <CardPruchaseGame game={game} section={"favoritesCard"} />
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
