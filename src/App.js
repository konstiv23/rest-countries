import React from "react";
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
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </main>
    </div>
  );
}

export default App;
