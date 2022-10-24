import "./App.css";
import { Redirect, Route } from "react-router-dom";
import Home from "./components/home";
import CreateUser from "./components/register";
import DetailGame from "./components/detailGame";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import YourCart from "./components/yourCart";
import UserProfile from "./components/profileUser";
import AdminHome from "./components/Dashboard/adminhome";
import Login from "./components/login";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGames,
  getUserProfile,
  roleSignSaveStorage,
} from "./redux/actions";
import { useEffect } from "react";

function App() {
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );
  /* const user = useSelector((state) => state.user); */
  /* console.log(user, "profile"); */
  const dispatch = useDispatch();

  const getDataSingInUser = () => {
    const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
    if (dataLocaleStorage) {
      dispatch(getUserProfile(dataLocaleStorage.user.id));
      dispatch(roleSignSaveStorage(dataLocaleStorage));
    } else {
      return {};
    }
  };

  //const gameLocalStorage = JSON.parse(localStorage.getItem("name"))

  useEffect(() => {
    getDataSingInUser();
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <>
      <Route
        path={[
          "/",
          "/detail/:id",
          "/CreateUser",
          "/genres/:id",
          "/CreateGames",
          "/login",
          "/yourCart",
        ]}
        component={NavBar}
      />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detail/:id"} component={DetailGame} />
      <Route exact path="/CreateUser" component={CreateUser} />
      <Route exact path={"/genres/:id"} component={Genres} />
      <Route exact path={"/yourCart"} component={YourCart} />
      <Route exact path={"/login"} component={Login} />
      <Route
        exact
        path={[
          "/",
          "/detail/:id",
          "/CreateUser",
          "/genres/:id",
          "/CreateGames",
          "/login",
          "/yourCart",
        ]}
        component={Footer}
      />
      <Route
        exact
        path={"/user"}
        render={() => {
          return Object.entries(roleSignInSaveStorage).length ? (
            roleSignInSaveStorage.user.isAdmin === true ? (
              <Redirect to={"/"} />
            ) : (
              <UserProfile />
            )
          ) : (
            <Redirect to={"/"} />
          );
        }}
      />
      <Route
        path={"/admin"}
        render={() => {
          return Object.entries(roleSignInSaveStorage).length ? (
            roleSignInSaveStorage.user.isAdmin === false ? (
              <Redirect to={"/"} />
            ) : (
              <AdminHome />
            )
          ) : (
            <Redirect to={"/"} />
          );
        }}
      />
    </>
  );
}

export default App;
