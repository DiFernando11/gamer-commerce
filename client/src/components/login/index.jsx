import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin, googleSign } from "../../redux/actions";
import "./index.css";
import Modal from "../modal";
import jwt_decode from "jwt-decode"
import { createUser } from "../../redux/actions";

const google = window.google;


function Login() {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const signInUser = useSelector((state) => state.userSignIn);
  const [modalVisible, setModalVisible] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function InputValidator(input) {
    let err = {};
    if (!input.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      err.email = "Email address is invalid";
    } else if (!input.password) {
      err.password = "Password is required";
    }
    setDisabled(false);
    return err;
  }

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

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postLogin(input));
    setModalVisible(true);
    setDisabled(true);
    setInput({
      email: "",
      password: "",
    });
  }
  const closeModalSigIn = () => {
    if (signInUser.hasOwnProperty("user")) {
      localStorage.setItem("userSingIn", JSON.stringify(signInUser));
      window.location.replace("/");
    }
    setModalVisible(false);
  };


  // Google auth 
  let handleCallbackResponse = (response) => {
    let userRes = jwt_decode(response.credential);
    let googleUser = {
      name: userRes.given_name,
      lastname: userRes.family_name,
      email: userRes.email,
      password: userRes.sub,
      profilePicture: userRes.picture,
      google: true
    };



    dispatch(googleSign(googleUser))
  }


  useEffect(async () => {
    await google.accounts.id.initialize({
      client_id: "532172904271-fv4h8lt47tcec3pchfhp2030t4v1kjbl.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    await google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

  }, [])





  return (
    <main className="containerformlogin">
      <div className="container">
        <form className="formlogin" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={input.email}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={input.password}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>
          <div className="divsubmitlogin">
            <button
              className="btnformlogin"
              type="submit"
              disabled={
                disabled === false && Object.entries(error).length === 0
                  ? false
                  : true
              }
            >
              Submit
            </button>
          </div>
          <div className="divforgotpassword">
            <label className="forgotpassword">forgot password?</label>
          </div>
          <hr className="hrformlogin"></hr>
          <div className="divbuttontocreateuser">
            <Link to={"/CreateUser"}>
              <button className="buttonlogintocreateuser">
                Don't have an account?
              </button>
            </Link>
            <div id="signInDiv"></div>

          </div>
        </form>

      </div>
      {modalVisible ? (
        <Modal>
          <p>{signInUser.msg}</p>
          <button onClick={closeModalSigIn}>Aceptar</button>
        </Modal>
      ) : null}
    </main>
  );
}

export default Login;
