import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/home";
import CreateUser from "./components/register";
import CreateGames from "./components/creategame";
import DetailGame from "./components/detailGame";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detail/:id"} component={DetailGame} />
      <Route exact path="/CreateUser">
        <CreateUser />
      </Route>
      <Route exact path="/CreateGames">
        <CreateGames />
      </Route>
      <Footer />
    </>
  );
}

export default App;
