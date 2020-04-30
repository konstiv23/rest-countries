import React from "react";
import SearchAndFilter from "./SearchAndFilter.js";
import CountriesGrid from "./CountriesGrid.js";
import CountryDetails from "./CountryDetails.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/rest-countries/details">
              <CountryDetails/>
            </Route>
            <Route exact path="/rest-countries/">
              <SearchAndFilter/>
              <CountriesGrid/>
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

function Error404() {
  return (
    <h1 class="error404">
      Error 404: resource not found
    </h1>
  );
}

export default App;
