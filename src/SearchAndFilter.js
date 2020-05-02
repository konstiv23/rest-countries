import React, { useCallback } from "react";
import { debounce } from "lodash";
import "./SearchAndFilter.css";


function SearchAndFilter({ setSearch, setFilter }) {

  const delayedSetSearch = useCallback(debounce(
    event => setSearch(event.target.value),
  500), []); // 500 milliseconds delay

  function onSearchChange(event) {
    event.persist();
    // only call setSearch when finished typing
    delayedSetSearch(event);
  }

  function onFilterChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div className="search-and-filter">
      <div className="search">
        <div className="search-icon-wrapper">
          <i className="search-icon fas fa-search"></i>
        </div>
        <input type="text" placeholder="Search for a country..."
          onChange={onSearchChange}
        />
      </div>
      <select className="world-region" onChange={onFilterChange}>
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
