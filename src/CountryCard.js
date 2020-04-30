import React from "react";
import "./CountryCard.css";

function CountryCard() {
  return (
    <div className="CountryCard">
      <img src="https://restcountries.eu/data/col.svg" alt="flag"/>
      <div className="card-text">
        <h2>Country name</h2>
        <div><strong>Population: </strong>100,000</div>
        <div><strong>Region: </strong>Americas</div>
        <div><strong>Capital: </strong>Bogota</div>
      </div>
    </div>
  );
}

export default CountryCard;
