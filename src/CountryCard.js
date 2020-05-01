import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "./numberWithCommas.js";
import "./CountryCard.css";

function CountryCard({flag, name, population, region, capital}) {
  return (
    <div className="CountryCard">
      <img src={flag} alt="flag"/>
      <div className="card-text">
        <h2><Link to={"/rest-countries/details/" + encodeURI(name)}>{name}</Link></h2>
        <div><strong>Population: </strong>{numberWithCommas(population)}</div>
        <div><strong>Region: </strong>{region}</div>
        <div><strong>Capital: </strong>{capital}</div>
      </div>
    </div>
  );
}

export default CountryCard;
