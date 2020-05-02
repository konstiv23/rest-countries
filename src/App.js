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
  const [search, setSearch] = useState("");

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
              <SearchAndFilter setSearch={setSearch} setFilter={setFilter}
              />
              <CountriesGrid search={search} filter={filter}/>
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
