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

export default CountriesGrid;
