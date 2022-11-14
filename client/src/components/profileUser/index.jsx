import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteYourFavs,
  getUserProfile,
  setRefreshUpdate,
  updateDataUserProfile,
  updateProfileUser,
} from "../../redux/actions";
import { uploadImage } from "../../utils/utils";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";
import Swal from "sweetalert2";
import Toggle from "../Dashboard/Toggle/index";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

function UserProfile() {
  const [videoGameFavorite, setVideoGameFavorite] = useState([]);
  const [backGroundColor, setBackGroundColor] = useState("#201e1e");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [alert, setAlert] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    password: "",
  });
  const refreshUpdate = useSelector((state) => state.stateRefreshUpdate);
  const user = useSelector((state) => state.user);
  const [imageUser, setImageUser] = useState(user?.profilePicture);
  const [first, setfirst] = useState(false);

  let dispatch = useDispatch();
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(
      InputValidator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  function InputValidator(input) {
    let err = {};
    if (
      !input.name ||
      typeof input.name !== "string" ||
      /([0-9])/.test(input.name) ||
      input.name.length < 4 ||
      input.name.length > 12 ||
      input.name !== input.name.trim() ||
      input.name.search(/^[a-zA-Z\s]*$/) === -1
    ) {
      err.name = "Please type a name validate!";
    } else if (input.name[0] === input.name[0].toLowerCase()) {
      err.name = "The first letter must be uppercase";
    } else if (
      !input.lastname ||
      typeof input.lastname !== "string" ||
      /([0-9])/.test(input.lastname) ||
      input.lastname.length < 4 ||
      input.lastname.length > 12 ||
      input.lastname !== input.lastname.trim()
    ) {
      err.lastname = "Please type a lastname validate!";
    } else if (input.lastname[0] === input.lastname[0].toLowerCase()) {
      err.lastname = "The first letter must be uppercase";
    } else if (
      input.password.length < 8 ||
      input.password.length > 16 ||
      input.password.search(/\d/) === -1 ||
      input.password.search(/[a-zA-Z]/) === -1
    ) {
      err.password = "Please type a valid password!";
    }
    if (input.lastname === "") {
      err.lastname = "";
    }
    if (input.name === "") {
      err.name = "";
    }
    if (input.password === "") {
      err.password = "";
    }
    return err;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser(roleSignInSaveStorage.user?.id, input));
    Swal.fire({
      icon: "success",
      title: "Your profile has been successfully updated.",
    }).then((response) => {
      if (response.isConfirmed) {
        setModal(!modal);
        setInput({
          name: "",
          lastname: "",
          password: "",
        });
      }
    });
  };

  const saveDataBackGround = (e) => {
    localStorage.setItem("backgroudProfile", e.target.value);
    setBackGroundColor(e.target.value);
  };
  const saveDataImageProfile = (e) => {
    setfirst(true);
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
  const handleModal = () => {
    setModal(!modal);
    setInput({
      name: "",
      lastname: "",
      password: "",
    });
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
  const gamesPurchasedUserProfile =
    filterPurschasedSucces?.length &&
    filterPurschasedSucces.map((game) => game.games).flat();
  const totalAmountPurchased =
    filterPurschasedSucces?.length &&
    filterPurschasedSucces.reduce(
      (current, nextCurrent) => current + nextCurrent.amount,
      0
    );
  const totalGamesPurchased = gamesPurchasedUserProfile?.length;
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
  const handleDeleteAllLocalStorage = () => {
    localStorage.removeItem("favorite");
    dispatch(deleteYourFavs(user?.id));
    dispatch(setRefreshUpdate(true));
  };
  useEffect(() => {
    setBackGroundColor(getData());
    setVideoGameFavorite(getDataFavorites);
    if (roleSignInSaveStorage?.user)
      dispatch(getUserProfile(roleSignInSaveStorage?.user?.id));
  }, [
    dispatch,
    roleSignInSaveStorage?.user?.id,
    isUpload,
    refreshUpdate,
    modal,
    roleSignInSaveStorage?.user,
  ]);

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
                <img
                  src={imageUser ? imageUser : user.profilePicture}
                  alt="logo User"
                />
                {imageUser !== user?.profilePicture && alert && first
                  ? handleSweetAlert(imageUser)
                  : null}
              </>
            )}
            <div className={styles.uploadImageUserProfilesContainer}>
              {!isUpload ? (
                <button
                  type="button"
                  className={`container_btn_file ${styles.container_btn_file_user} `}
                >
                  <label htmlFor="image">
                    <i className="bi bi-file-earmark-arrow-up"></i> add photo
                    Profile
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
            <div className={styles.toggleds}>
              <p>receive offers {toggled ? "yes" : "not"}</p>
              <Toggle onChange={(event) => setToggled(event.target.checked)} />
            </div>

            <label>FULLNAME</label>
            <span>{`${user.name} ${user.lastname}`}</span>
            <label>EMAIL</label>
            <span>{user.email}</span>
            <label>AGE</label>
            <span>{user.age} years </span>
            <div className={styles.containerFlexEdit}>
              <div>
                <label>PASSWORD </label>
                <span>*************</span>
              </div>

              <button onClick={handleModal}>
                Edit profile <i className="bi bi-pencil-square"></i>
              </button>

              <Modal isOpen={modal}>
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalBody>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                      <label>Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Type a Name"
                        onChange={(e) => handleChange(e)}
                        value={input.name}
                      />
                      {error.name && <p className="alert">{error.name}</p>}
                    </FormGroup>
                    <FormGroup>
                      <label>Lastname</label>
                      <Input
                        type="text"
                        name="lastname"
                        placeholder="Type a Lastname"
                        onChange={(e) => handleChange(e)}
                        value={input.lastname}
                      />
                      {error.lastname && (
                        <p className="alert">{error.lastname}</p>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Type a Password"
                        onChange={(e) => handleChange(e)}
                        value={input.password}
                      />
                      {error.password && (
                        <p className="alert">{error.password}</p>
                      )}
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Save Changes
                    </Button>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={handleModal}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </section>
        </div>
        <div className={styles.containerCardsSection}>
          <div className={styles.container_flex_register}>
            <section
              style={{ backgroundColor: backGroundColor }}
              className={styles.yourShopping}
            >
              <h1>Your shopping: {totalAmountPurchased}$</h1>
              <span className={styles.purchasedTotalGames}>
                purchased games {totalGamesPurchased}
              </span>
              <div className={styles.containerShoopinCards}>
                {gamesPurchasedUserProfile?.length ? (
                  gamesPurchasedUserProfile.map((game, index) => (
                    <div key={index} className={styles.containerShoopinCard}>
                      <CardPruchaseGame game={game} section={"purchased"} />
                    </div>
                  ))
                ) : (
                  <div className={styles.notFavoritesPurchased}>
                    <Link to={"/"}>BUY A SET</Link>
                  </div>
                )}
              </div>
            </section>
          </div>
          <section
            style={{ backgroundColor: backGroundColor }}
            className={styles.yourFavorites}
          >
            <h1>Your Favorites</h1>

            <div className={styles.containerShoopinCards}>
              {videoGameFavorite?.length ? (
                videoGameFavorite.map((game, index) => (
                  <div key={index} className={styles.containerShoopinCard}>
                    <CardPruchaseGame game={game} section={"favoritesCard"} />
                  </div>
                ))
              ) : (
                <div className={styles.notFavoritesPurchased}>
                  <Link to={"/"}>ADD FAVORITES</Link>
                </div>
              )}
            </div>
            <span
              onClick={handleDeleteAllLocalStorage}
              className={styles.deleteAllProducts}
            >
              Remove all items
            </span>
          </section>
        </div>
      </div>
    </main>
  );
}

export default UserProfile;
