import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/actions";
import "./index.css";
import Modal from "../modal";

function Login() {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const signInUser = useSelector((state) => state.userSignIn);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(signInUser);

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
    // if (signInUser.hasOwnProperty("user")) {
    if (signInUser.hasOwnProperty("user")) {
      localStorage.setItem("userSingIn", JSON.stringify(signInUser));
      window.location.replace("/");
    }
    setModalVisible(false);
  };
  const localSign = JSON.parse(localStorage.getItem("userSingIn"));
  console.log(localSign, "local");
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
            {/* <div  class="form-text">We'll never share your email with anyone else.</div> */}
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
