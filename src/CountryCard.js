import React from "react";
import "./CountryCard.css";

function CountryCard({flag, name, population, region, capital}) {
  return (
    <div className="CountryCard">
      <img src={flag} alt="flag"/>
      <div className="card-text">
        <h2>{name}</h2>
        <div><strong>Population: </strong>{population}</div>
        <div><strong>Region: </strong>{region}</div>
        <div><strong>Capital: </strong>{capital}</div>
      </div>
    </div>
  );
}

export default CountryCard;
