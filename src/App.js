import React from "react";
import SearchAndFilter from "./SearchAndFilter.js";
import CountriesGrid from "./CountriesGrid.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <main>
        <SearchAndFilter/>
        <CountriesGrid/>
      </main>
    </div>
  );
}

export default App;
