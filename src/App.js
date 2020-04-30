import React from "react";
import CountryCard from "./CountryCard.js";
import SearchAndFilter from "./SearchAndFilter.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <main>
        <SearchAndFilter/>
        <div className="country-cards">
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
          <CountryCard/>
        </div>
      </main>
    </div>
  );
}

export default App;
