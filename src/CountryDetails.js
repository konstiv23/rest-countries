import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "./numberWithCommas.js";
import "./CountryDetails.css";

function CountryDetails() {

  const [country, setCountry] = useState({});

  useEffect(() => { //on mount
    const Http = new XMLHttpRequest();
    const countryName = countryNameFromUrl();
    const url='https://restcountries.eu/rest/v2/name/' + encodeURI(countryName);
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      if (Http.readyState === 4 && Http.status === 200)
      {
        const countryObj = JSON.parse(Http.responseText)[0];
        console.log(countryObj);
        setCountry(countryObj);
      }
    }
  }, []);

  let populWithCommas = numberWithCommas(country.population || "");

  return (
    <div className="details">
      <Link to="/rest-countries/">
        <i className="fas fa-long-arrow-alt-left"></i>Back
      </Link>
      <section>
        <img src={country.flag} alt="flag"/>
        <div className="details-text">
          <h1>{country.name}</h1>
          <div className="columns">
            <div className="column1">
              <div><strong>Native Name: </strong>{country.nativeName}</div>
              <div><strong>Population: </strong>{populWithCommas}</div>
              <div><strong>Region: </strong>{country.region}</div>
              <div><strong>Sub Region: </strong>{country.subregion}</div>
              <div><strong>Capital: </strong>{country.capital}</div>
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
  const encodedName = currentUrl.substring(lastSlashIndex + 1);
  return decodeURI(encodedName);
}

export default CountryDetails;
