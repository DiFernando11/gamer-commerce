import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGame, getGenres, setRefreshUpdate } from "../../redux/actions";
import Select from "react-select";
import "./index.scss";
import { validateDate } from "./helper";
import { uploadImage } from "../../utils/utils";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
//import axios from "axios";

const CreateGame = () => {
  const [error, setError] = useState("");
  const allGames = useSelector((state) => state.allGames);
  const idGameCreated = Math.max(...allGames.map((i) => i.id));
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState("");
  const [imageSecondary, setImageSecondary] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingImageSecondary, setLoadingImageSecondary] = useState(false);

  let history = useHistory();
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    image: "",
    image2: "",
    price: 0,
    website: "",
    requirements_min: "",
    requirements_rec: "",
    genres: [],
    rating: 0,
  });

  const dispatch = useDispatch();
  const genre = useSelector((state) => state.Genre);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSelect = (e) => {
    setInput({
      ...input,
      genres: e.map((type) => type.value),
    });
    setError(
      InputValidator({
        ...input,
        genres: e.map((type) => type.value),
      })
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      InputValidator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleChangeImage = (e) => {
    uploadImage(e, setLoading, setImage);
  };
  const handleChangeImageSecondary = (e) => {
    uploadImage(e, setLoadingImageSecondary, setImageSecondary);
  };
  const handleRefreshImage = () => {
    setInput({ ...input, image: image, image2: imageSecondary });
  };
  function InputValidator(input) {
    let err = {};
    if (
      !input.name ||
      typeof input.name !== "string" ||
      input.name === "" ||
      input.name !== input.name.trim()
    ) {
      err.name = "Please type a name validate.";
    } else if (input.name[0] === input.name[0].toLowerCase()) {
      err.name = "The first letter must be uppercase";
    } else if (input.name.length < 4) {
      err.name = "The name is too short.";
    } else if (input.name.length > 30) {
      err.name = "The name is too long.";
    } else if (
      input.description === "" ||
      input.description.length < 4 ||
      input.description !== input.description.trim()
    ) {
      err.description = "The description must be valid.";
    } else if (validateDate(input.released)) {
      err.released = "The date must be between 1980 and 2021";
    } else if (input.price <= 0 || input.price > 1000) {
      err.price = "The price must be between 0 and 1000";
    } else if (!input.website || typeof input.website !== "string") {
      err.website = "Please type a website.";
    } else if (input.website.length > 100) {
      err.website = "The website must be less than 100 characters";
    } else if (
      !input.requirements_min ||
      typeof input.requirements_min !== "string" ||
      input.requirements_min === "" ||
      input.requirements_min.length < 4
    ) {
      err.requirements_min = "Please type a systemrequirementsmin validate!";
    } else if (
      !input.requirements_rec ||
      typeof input.requirements_rec !== "string" ||
      input.requirements_rec === "" ||
      input.requirements_rec.length < 4
    ) {
      err.requirements_rec = "Please type a systemrequirementsmax validate!";
    } else if (
      input.genres.length === 0 ||
      input.genres.length > 8 ||
      input.genres === []
    ) {
      err.genres = "Please select a genre";
    }

    setDisabled(false);
    return err;
  }
  const handleSubmit = (e) => {
    input.price = parseInt(input.price);
    e.preventDefault();
    try {
      dispatch(createGame(input));
    } catch (error) {
      console.log(error);
    }
    setDisabled(true);
    setInput({
      name: "",
      description: "",
      released: "",
      image: "",
      image2: "",
      price: 0,
      website: "",
      requirements_min: "",
      requirements_rec: "",
      genres: [],
      rating: 0,
      developers: [],
    });
    handleAlertGameSuccesCreated();
  };
  const handleAlertGameSuccesCreated = () => {
    Swal.fire({
      icon: "success",
      html: "<h3>Thank you for your contribution, review successfully submitted.</h3>",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
    }).then((res) => {
      if (res.isConfirmed) {
        history.push(`/admin/games/detail/${idGameCreated + 1}`);
        dispatch(setRefreshUpdate());
      }
    });
  };
  return (
    <div className="font-cgame">
      <div className="container2">
        <form
          onBlur={handleRefreshImage}
          className="form-cgame"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>ADD GAME</h1>
          <div className="container_flex_buttonsUpload_file">
            <div className="container_file_upload_server">
              {loading ? (
                <img
                  src="https://acegif.com/wp-content/uploads/loading-11.gif"
                  alt="gift de carga"
                />
              ) : (
                <img
                  src={`${
                    image
                      ? image
                      : "https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png"
                  }`}
                  alt="logo main game"
                />
              )}
              <button
                type="button"
                className="container_btn_file bordeado_btn_file"
              >
                <label htmlFor="image">
                  <i className="bi bi-file-earmark-arrow-up"></i> Add Image
                </label>
                <input
                  id="image"
                  type="file"
                  name="image"
                  onChange={handleChangeImage}
                />
              </button>
            </div>
            <div className="container_file_upload_server">
              {loadingImageSecondary ? (
                <img
                  src="https://acegif.com/wp-content/uploads/loading-11.gif"
                  alt="gift de carga"
                />
              ) : (
                <img
                  src={`${
                    imageSecondary
                      ? imageSecondary
                      : "https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png"
                  }`}
                  alt="logo main game"
                />
              )}
              <button
                type="button"
                className="container_btn_file bordeado_btn_file"
              >
                <label htmlFor="image2">
                  <i className="bi bi-file-earmark-arrow-up"></i> Add Image
                </label>

                <input
                  id="image2"
                  onBlur={handleRefreshImage}
                  type="file"
                  name="image2"
                  onChange={handleChangeImageSecondary}
                />
              </button>
            </div>
          </div>
          <div className="parrafo">Name:</div>
          <input
            className="inputs2"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={input.name}
          />
          {error.name && <p className="alert">{error.name}</p>}
          <div className="parrafo">Description:</div>
          <input
            className="inputs2"
            type="textarea"
            name="description"
            onChange={(e) => handleChange(e)}
            value={input.description}
          />
          {error.description && <p className="alert">{error.description}</p>}
          <div className="parrafo">Released:</div>
          <input
            className="inputs2"
            type="date"
            name="released"
            onChange={(e) => handleChange(e)}
            value={input.released}
          />
          {error.released && <p className="alert">{error.released}</p>}
          <div className="parrafo">Genre:</div>
          <Select
            className="input-select"
            isMulti
            placeholder="Select Genres"
            options={genre.map((t) => ({
              value: t.name,
              label: t.name,
            }))}
            onChange={(e) => handleSelect(e)}
          />
          {error.genres && <p className="alert">{error.genres}</p>}
          <div className="parrafo">Price: </div>
          <input
            className="inputs2"
            type="number"
            name="price"
            onChange={(e) => handleChange(e)}
            value={input.price}
          />
          {error.price && <p className="alert">{error.price}</p>}
          <div className="parrafo">Website: </div>
          <input
            className="inputs2"
            type="text"
            name="website"
            onChange={(e) => handleChange(e)}
            value={input.website}
          />
          {error.website && <p className="alert">{error.website}</p>}
          <div className="parrafo">System Requirements Min: </div>
          <input
            className="inputs2"
            type="textarea"
            name="requirements_min"
            onChange={(e) => handleChange(e)}
            value={input.requirements_min}
          />
          {error.requirements_min && (
            <p className="alert">{error.requirements_min}</p>
          )}
          <div className="parrafo">System Requirements Rec: </div>
          <input
            className="inputs2"
            type="textarea"
            name="requirements_rec"
            onChange={(e) => handleChange(e)}
            value={input.requirements_rec}
          />
          {error.requirements_rec && (
            <p className="alert">{error.requirements_rec}</p>
          )}
          <div className="parrafo">
            <button
              onMouseOver={handleRefreshImage}
              className="btnform"
              type="submit"
              disabled={
                disabled === false && Object.entries(error).length === 0
                  ? false
                  : true
              }
            >
              Create Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
