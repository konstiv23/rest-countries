import React, { useState } from "react";
import "./SearchAndFilter.css";

function SearchAndFilter({ setFilterParent }) {

  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    const val = event.target.value;
    setFilter(val);
    setFilterParent(val);
  }

  return (
    <div className="search-and-filter">
      <div className="search">
        <div className="search-icon-wrapper">
          <i className="search-icon fas fa-search"></i>
        </div>
        <input type="text" placeholder="Search for a country..."/>
      </div>
      <select className="world-region"
          defaultValue="filter by region"
          value={filter}
          onChange={handleFilterChange}
      >
        <option value="filter by region" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
