import React from "react";
import CountryCard from "./CountryCard.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
      </header>
      <main>
        <div className="search-and-filter">
          <div className="search">
            <div className="search-icon-wrapper">
              <i className="search-icon fas fa-search"></i>
            </div>
            <input type="text" placeholder="Search for a country..."/>
          </div>
          <select className="world-region">
            <option value="" disabled selected hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
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
