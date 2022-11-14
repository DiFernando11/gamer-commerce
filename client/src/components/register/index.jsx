import React, { useState, useRef } from "react";
import "./index.scss";
/* import ReCAPTCHA from "react-google-recaptcha"; */
import { useSelector, useDispatch } from "react-redux";
import { validateDate } from "../creategame/helper";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { createUser } from "../../redux/actions";
import Swal from "sweetalert2";

const CreateUser = () => {
  const register = useSelector((state) => state.registered);
  const dispatch = useDispatch();
  const recaptcha = useRef(null);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    birthday: "",
    country: "",
  });

  function _suggestionSelect(result) {
    setInput({
      ...input,
      country: result,
    });
    setError(
      InputValidator({
        ...input,
        country: result,
      })
    );
  }
  const mapAccess = {
    mapboxApiAccessToken:
      "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w",
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

  function DateNumber(dia) {
    let input = new Date(dia).getTime();
    let hoy = new Date().getTime();
    let diff = hoy - input;
    let dias = diff / (1000 * 60 * 60 * 24) / 365;
    return Number(dias.toString().slice(0, 2));
  }

  function All(e, dia) {
    DateNumber(dia);
    handleChange(e);
  }

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
    } else if (!input.email || typeof input.email !== "string") {
      err.email = "Please type a email!";
    } else if (
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) ===
      false
    ) {
      err.email = "Please type a valid email!";
    } else if (!input.password || typeof input.password !== "string") {
      err.password = "Please type a password!";
    } else if (
      input.password.length < 8 ||
      input.password.length > 16 ||
      input.password.search(/\d/) === -1 ||
      input.password.search(/[a-zA-Z]/) === -1
    ) {
      err.password = "Please type a valid password!";
    } else if (
      !input.confirmpassword ||
      typeof input.confirmpassword !== "string"
    ) {
      err.confirmpassword = "Please type a password!";
    } else if (input.password !== input.confirmpassword) {
      err.confirmpassword = "Passwords must be the same!";
    } else if (validateDate(input.birthday)) {
      err.birthday = "The date must be between 1940 and 2010";
    } else if (
      input.country === "" ||
      typeof input.country !== "string" ||
      input.country.length < 4 ||
      input.country.length > 40
    ) {
      err.country = "Please select valid country";
    }
    setDisabled(false);
    return err;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!register.user){
      Swal.fire({
        title: "Waiting for confirmation...",
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
    dispatch(createUser(input));
    setDisabled(true);
    setLoading(true);
    setInput({
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      birthday: "",
      country: "",
    });
    // recaptcha.current.reset();
  };
  const handleAlert = (result) =>{
    if(result.user){
      Swal.fire({
        icon: "success",
        title: `Welcome ${result?.user?.name}`
      }).then((response) => {
        if (response.isConfirmed) {
          window.location.replace("/login");
        }
      });
    }
  }
  return (
    <div className="font">
      <div className="prueba">
        {handleAlert(register)}
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Create User</h1>
          <div className="parrafo">Name:</div>
          <input
            className="inputs"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={input.name}
          />
          {error.name && <p className="alert">{error.name}</p>}
          <div className="parrafo">Lastname:</div>
          <input
            className="inputs"
            type="text"
            name="lastname"
            onChange={(e) => handleChange(e)}
            value={input.lastname}
          />
          {error.lastname && <p className="alert">{error.lastname}</p>}
          <div className="parrafo">Email:</div>
          <input
            className="inputs"
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            value={input.email}
          />
          {error.email && <p className="alert">{error.email}</p>}
          <div className="parrafo">Password:</div>
          <input
            className="inputs"
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            value={input.password}
          />
          {error.password && <p className="alert">{error.password}</p>}
          <div className="parrafo">Confirmpassword:</div>
          <input
            className="inputs"
            type="password"
            name="confirmpassword"
            onChange={(e, dia) => All(e, dia)}
            value={input.confirmpassword}
          />
          {error.confirmpassword && (
            <p className="alert">{error.confirmpassword}</p>
          )}
          <div className="parrafo">Birthday:</div>
          <input
            className="inputss"
            type="date"
            name="birthday"
            onChange={(e) => handleChange(e)}
            value={input.birthday}
          />
          {error.birthday && <p className="alert">{error.birthday}</p>}
          <div className="parrafo">Country:</div>
          <div className="containerMapBoxCountries">
            <MapboxAutocomplete
              publicKey={mapAccess.mapboxApiAccessToken}
              onSuggestionSelect={_suggestionSelect}
              resetSearch={false}
              placeholder={!input.country ? "write your city" : "modify city"}
              styles={{ width: "100%" }}
            />
          </div>
          {error.country && <p className="alert">{error.country}</p>}

{/*           <ReCAPTCHA
            className="captcha"
            ref={recaptcha}
            sitekey="6LfIGXQiAAAAAHtWC0ViAzlQXFS5pwOwaBJuJeXP"
            onChange={handleChange}
          /> */}
          <div className="parrafo">
            <button
              className="btn4"
              type="submit"
              disabled={
                disabled === false && Object.entries(error).length === 0
                  ? false
                  : true
              }
            >
              Create User
            </button>
            {!register.token && !register.error && loading ? (
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
