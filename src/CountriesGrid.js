import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard.js";

function CountriesGrid() {

  const [cards, setCards] = useState([]);

  useEffect(() => { //on mount
    // request all countries
    const Http = new XMLHttpRequest();
    const url='https://restcountries.eu/rest/v2/all';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      // wihtout this if cards would be set twice
      if (Http.readyState === 4 && Http.status === 200)
      {
        const countries = JSON.parse(Http.responseText);
        countries.sort(sortCompare);
        const newCards = [];
        for(let i = 0; i < countries.length; i++) {
          newCards.push(<CountryCard
            key={i}
            flag={countries[i].flag}
            name={countries[i].name}
            population={countries[i].population}
            region={countries[i].region}
            capital={countries[i].capital}
          />);
        }
        setCards(newCards);
      }
    }
  }, []);

  return (
    <div className="countries-grid">
      {cards}
    </div>
  );
}

const showFirst = {};
showFirst["Russian Federation"] = 1;
showFirst["United States of America"] = 2;
showFirst["Brazil"] = 3;
showFirst["Iceland"] = 4;

function sortCompare(a, b) {
  if(showFirst[a.name] && showFirst[b.name]) {
    if(showFirst[a.name] < showFirst[b.name]) {
      return -1;
    }
    if (showFirst[a.name] > showFirst[b.name]) {
      return 1;
    }
    else return 0;
  }
  if(showFirst[a.name] && !showFirst[b.name]) {
    return -1;
  }
  if(!showFirst[a.name] && showFirst[b.name]) {
    return 1;
  }
  else {
    return a.name.localeCompare(b.name);
  }
}

export default CountriesGrid;
