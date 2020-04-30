import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CountryDetails.css";

function CountryDetails() {

  const [countryName, setCountryName] = useState(countryNameFromUrl());

  return (
    <div className="details">
      <Link to="/rest-countries/">
        <i class="fas fa-long-arrow-alt-left"></i>Back
      </Link>
      <section>
        <img src="https://restcountries.eu/data/col.svg" alt="flag"/>
        <div className="details-text">
          <h1>{countryName}</h1>
          <div className="columns">
            <div className="column1">
              <div><strong>Native Name: </strong></div>
              <div><strong>Population: </strong></div>
              <div><strong>Region: </strong></div>
              <div><strong>Sub Region: </strong></div>
              <div><strong>Capital: </strong></div>
            </div>
            <div className="column2">
              <div><strong>Top Level Domain: </strong></div>
              <div><strong>Currencies: </strong></div>
              <div><strong>Languages: </strong></div>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries: </strong>
          </div>
        </div>
      </section>
    </div>
  );
}

function countryNameFromUrl() {
  let currentUrl = window.location.href;
  if(currentUrl.indexOf('details') === -1) {
    return null;
  }
  currentUrl = currentUrl.replace(/\/$/, '');
  const lastSlashIndex = currentUrl.lastIndexOf('/');
  return currentUrl.substring(lastSlashIndex + 1);
}

export default CountryDetails;
