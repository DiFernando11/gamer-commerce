import "./App.css";
import { Route} from "react-router-dom";
import Home from "./components/home";
import CreateUser from "./components/register";
import CreateGames from "./components/creategame";
import DetailGame from "./components/detailGame";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import YourCart from "./components/yourCart";


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
          "/yourCart",
        ]}
        component={NavBar}
      />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detail/:id"} component={DetailGame} />
      <Route exact path="/CreateUser" component={CreateUser} />
      <Route exact path="/CreateGames" component={CreateGames} />
      <Route exact path={"/genres/:id"} component={Genres} />
      <Route exact path={"/yourCart"} component={YourCart}/>
     <Footer />
    </>
  );
}

export default App;
