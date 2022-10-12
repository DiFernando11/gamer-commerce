import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <>
      <Route exact path={"/home"} component={Home} />
    </>
  );
}

export default App;
