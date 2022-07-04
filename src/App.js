import { BrowserRouter, Route, Switch} from "react-router-dom";

//
import Navbar from "./components/Navbar";

// Pages components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

// Styles imports
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route path={"/create"}>
          <Create />
        </Route>

        <Route path={"/search"}>
          <Search />
        </Route>

        
        <Route path={"/recipes/:id"}>
          <Recipe />
        </Route>


      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
