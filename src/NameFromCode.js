
// Returns a named link to country details from 3-letter code

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NameFromCode({ code }) {

  const [name, setName] = useState("");

  useEffect(() => { //on mount and code change
    const Http = new XMLHttpRequest();
    const url='https://restcountries.eu/rest/v2/alpha/' + encodeURI(code);
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      if (Http.readyState === 4 && Http.status === 200)
      {
        const country = JSON.parse(Http.responseText);
        setName(country.name);
      }
    }
  }, [code]);

  return (
    <Link to={"/rest-countries/details/" + encodeURI(name)}>
      {name}
    </Link>
  );
}

export default NameFromCode;
