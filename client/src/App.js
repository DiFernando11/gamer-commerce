import "./App.css";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";
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
import Page404 from "./components/page404";
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
import About from "./components/about";

function App() {
  const rol = useSelector((state) => state.roleSignInSaveStorage);

  axios.defaults.headers.common["authorization"] = `Bearer ${rol.token}`;

  const cartUser = useSelector((state) => state.cartUser);
  const refreshPurchasedGame = useSelector(
    (state) => state.refreshPurchasedGame
  );
  const favoriteUser = useSelector((state) => state.favoriteUser);
  const [refresh, setRefresh] = useState(false);
  const dataLocaleStorageCart = JSON.parse(localStorage.getItem("name"));
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
      if (favoriteDataBase) {
        localStorage.setItem("favorite", JSON.stringify(favoriteDataBase));
      }
      if (cartDataBase) {
        localStorage.setItem("name", JSON.stringify(cartDataBase));
      }
      dispatch(
        numberGamesCarts(
          dataLocaleStorageCart?.length || cartDataBase?.length || 0
        )
      );
      setTimeout(() => setRefresh(true), 2000);
    } else {
      return {};
    }
  };

  const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
  useEffect(() => {
    getDataSingInUser();
    dispatch(getAllGames());
  }, [dispatch, refresh, refreshPurchasedGame]);
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
          "/about",
        ]}
        component={NavBar}
      />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/detail/:id"} component={DetailGame} />
        <Route exact path="/CreateUser" component={CreateUser} />
        <Route exact path={"/genres/:id"} component={Genres} />
        <Route exact path={"/yourCart"} component={YourCart} />
        <Route exact path={"/login"} component={Login} />
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
        <Route path={"/"} component={Page404} />
      </Switch>
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
    </>
  );
}

export default App;
