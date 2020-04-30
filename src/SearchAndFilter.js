import React from "react";
import "./SearchAndFilter.css";

function SearchAndFilter() {
  return (
    <div className="search-and-filter">
      <div className="search">
        <div className="search-icon-wrapper">
          <i className="search-icon fas fa-search"></i>
        </div>
        <input type="text" placeholder="Search for a country..."/>
      </div>
      <select className="world-region" defaultValue="filter by region">
        <option value="filter by region" hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
