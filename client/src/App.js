import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/home";
import CreateUser from "./components/register";
import CreateGames from "./components/creategame";
import DetailGame from "./components/detailGame";
import Footer from "./components/footer";
import CarrouselMainCategory from "./components/carouselMainCategory";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detail/:id"} component={DetailGame} />
      <Route exact path="/CreateUser" component={CreateUser} />
      <Route exact path="/CreateGames" component={CreateGames} />
      <Route exact path={"/genres/:id"} component={CarrouselMainCategory} />

      <Footer />
    </>
  );
}

export default App;
