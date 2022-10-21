import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/home";
import CreateUser from "./components/register";
import CreateGames from "./components/creategame";
import DetailGame from "./components/detailGame";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import YourCart from "./components/yourCart";
import UserProfile from "./components/profileUser";
import adminHome from "./components/Dashboard/adminhome";
import Login from "./components/login";

function App() {
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
      <Route exact path="/CreateGames" component={CreateGames} />
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
      <Route exact path={"/user"} component={UserProfile} />

      <Route path={"/admin"} component={adminHome} />  
     
     {/*  <Route exact path={"/admin/login"} component={adminlogin} />
      <Route exact path={"/admin/users"} component={adminUsers} />
      <Route exact path={"/admin/users/:userid"} component={adminuser} />
      <Route exact path={"/admin/orders"} component={adminorders} />
      <Route exact path={"/admin/games/:gameid"} component={adminGame} /> */}
    </>
  );
}

export default App;
