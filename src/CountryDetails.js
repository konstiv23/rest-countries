import React, { useState, useEffect } from "react";
import "./CountryDetails.css";

function CountryDetails() {

  const [countryName, setCountryName] = useState(countryNameFromUrl());

  return (
    <div className="CountryDetails">
      <a href="/"><span>←</span>Back</a>
      <h1>{countryName}</h1>
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
  return currentUrl.substring(lastSlashIndex + 1)
}

export default CountryDetails;
