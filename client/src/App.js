import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/home";
import CreateUser from './components/register';
import CreateGames from './components/creategame';


function App() {
  return (
    <>
      <Route exact path={"/home"} component={Home} />
            <Route exact path="/CreateUser">
        <CreateUser />
      </Route>
      <Route exact path="/CreateGames">
        <CreateGames />
      </Route>
      
    </>
  );
}

export default App;
