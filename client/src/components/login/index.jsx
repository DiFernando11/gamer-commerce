import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  postLogin,
  googleSign,
  LogOutUser,
  mergeLoginLogoutCart,
} from "../../redux/actions";
import "./index.css";

import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

function Login() {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const signInUser = useSelector((state) => state.userSignIn);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const gameCartLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
  const idgameCartLocalStorage =
    gameCartLocalStorage?.length && gameCartLocalStorage.map((game) => game.id);

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
    if (!signInUser.msg || !signInUser.user) {
      Swal.fire({
        title: "Waiting for confirmation...",
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
    setDisabled(true);
    setInput({
      email: "",
      password: "",
    });
  }

  const handleAlert = (result) => {
    if (
      result.msg === "Password incorrect" ||
      result.msg === "User not found"
    ) {
      Swal.fire(
        "Email or password are incorrect.",
        "Please, try again.",
        "warning"
      ).then((response) => {
        if (response.isConfirmed) {
          dispatch(LogOutUser());
        }
      });
    } else if (result.msg === "This user is banned") {
      Swal.fire({
        icon: "error",
        title: result.msg,
        html: "<p>Maybe you have violated the rules of the page.</p>",
        footer: "<b>If that is not the case, contact us.</b>",
      }).then((response) => {
        if (response.isConfirmed) {
          dispatch(LogOutUser());
        }
      });
    } else if (result.user) {
      Swal.fire({
        icon: "success",
        title: `Welcome ${result?.user?.name}`,
      }).then((response) => {
        if (response.isConfirmed) {
          localStorage.setItem("userSingIn", JSON.stringify(signInUser));
          Swal.fire({
            title: "Please wait..",
            didOpen: () => {
              Swal.showLoading();
            },
          });
          //opcional
          localStorage.removeItem("name");
          //consultar
          // if (idgameCartLocalStorage.length) {
          //    dispatch(
          //    mergeLoginLogoutCart({
          //     userid: signInUser?.user?.id,
          //     gameidArray: idgameCartLocalStorage,
          //     })
          //   );
          // }
          window.location.replace("/");
        }
      });
    }
  };

  let handleCallbackResponse = (response) => {
    let userRes = jwt_decode(response.credential);
    let googleUser = {
      name: userRes.given_name,
      lastname: userRes.family_name,
      email: userRes.email,
      password: userRes.sub,
      profilePicture: userRes.picture,
      google: true,
    };

    dispatch(googleSign(googleUser));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let googleInit = async () => {
      const google = await window.google;

      await google.accounts.id.initialize({
        client_id:
          "532172904271-fv4h8lt47tcec3pchfhp2030t4v1kjbl.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      await google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    };
    googleInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="containerformlogin">
      <div className="containerFlexLoginUser">
        {handleAlert(signInUser)}
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
          <hr className="hrformlogin"></hr>
          <div className="divbuttontocreateuser">
            <Link to={"/CreateUser"}>
              <button className="buttonlogintocreateuser">
                Don't have an account?
              </button>
            </Link>
            <div id="signInDiv" style={{ padding: "10px" }}></div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
