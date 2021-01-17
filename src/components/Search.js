import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="search">
      <label className="movieTitle" htmlFor="search-movies">
        Movie Title :{" "}
      </label>
      <input
        type="text"
        name="search-movies"
        id="search-movies"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
};

export default Search;
