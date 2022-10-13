import './App.css';
import { Route } from "react-router-dom";
import CreateUser from './components/register';
import CreateGames from './components/creategame';

function App() {
  return (
    <div className="App">
      <Route exact path="/CreateUser">
        <CreateUser />
      </Route>
      <Route exact path="/CreateGames">
        <CreateGames />
      </Route>
    </div>
  );
}

export default App;
