import React, { useState } from "react";
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

  const [filter, setFilter] = useState(null);

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
              <SearchAndFilter setFilterParent={setFilter}/>
              <CountriesGrid filter={filter}/>
            </Route>
            <Route path="*">
              <h1 class="error404">Error 404: page not found</h1>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
