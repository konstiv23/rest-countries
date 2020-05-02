import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard.js";

function CountriesGrid({ search, filter }) {

  const [cards, setCards] = useState([]);

  useEffect(() => { //on mount and update to search and filter

    const Http = new XMLHttpRequest();
    let url = "";
    if(search === "") {  // request all countries
      url='https://restcountries.eu/rest/v2/all';
    }
    else {  //request search
      url='https://restcountries.eu/rest/v2/name/' + encodeURI(search);
    }
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      // wihtout this if cards would be set twice
      if (Http.readyState === 4 && Http.status === 200)
      {
        let countries = JSON.parse(Http.responseText);
        countries.sort(sortCompare);
        if(filter) {
          countries = countries.filter(c => c.region === filter);
        }
        setCards(cardsFromCountries(countries));
      }
      else if(Http.status !== 200) {
        setCards([]);
      }
    }
  }, [search, filter]);

  return (
    <div className="countries-grid">
      {cards}
    </div>
  );
}

function cardsFromCountries(countries) {
  const cards = [];
  for(let i = 0; i < countries.length; i++) {
    cards.push(<CountryCard
      key={countries[i].name}
      flag={countries[i].flag}
      name={countries[i].name}
      population={countries[i].population}
      region={countries[i].region}
      capital={countries[i].capital}
    />);
  }
  return cards;
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
