import React, { useState } from "react";

export function Search({ onSearch }) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    onSearch(searchFilter);
  };

  return (
    <div className="input-group">
      <input
        className="form-control text-center shadow-none"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search for a movie"
      />
      <div className="input-group-append">
        <button
          className="btn btn-dark border-light border-4"
          id="search"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
