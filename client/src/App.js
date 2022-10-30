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
  getCartUser,
  getFavoriteUser,
  getUserProfile,
  numberGamesCarts,
  roleSignSaveStorage,
} from "./redux/actions";
import { useEffect, useState } from "react";

function App() {
  const cartUser = useSelector((state) => state.cartUser);
  const favoriteUser = useSelector((state) => state.favoriteUser);
  const [refresh, setRefresh] = useState(false);
  const cartDataBase = cartUser?.length && cartUser.map((cart) => cart.game);
  const favoriteDataBase =
    favoriteUser?.length && favoriteUser.map((fav) => fav.game);
  const dispatch = useDispatch();

  const getDataSingInUser = () => {
    const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
    if (dataLocaleStorage) {
      dispatch(getUserProfile(dataLocaleStorage?.user?.id));
      dispatch(roleSignSaveStorage(dataLocaleStorage));
      dispatch(getCartUser(dataLocaleStorage?.user?.id));
      dispatch(getFavoriteUser(dataLocaleStorage?.user?.id));
      localStorage.setItem("name", JSON.stringify(cartDataBase));
      localStorage.setItem("favorite", JSON.stringify(favoriteDataBase));
      dispatch(numberGamesCarts(cartDataBase.length || 0));
      setTimeout(() => setRefresh(true), 2000);
    } else {
      return {};
    }
  };

  const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
  useEffect(() => {
    getDataSingInUser();
    dispatch(getAllGames());
  }, [dispatch, refresh]);
  return (
    <>
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
          "/user",
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
          return Object.entries(dataLocaleStorage).length ? (
            dataLocaleStorage.user.isAdmin === true ? (
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
          return Object.entries(dataLocaleStorage).length ? (
            dataLocaleStorage.user.isAdmin === false ? (
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
