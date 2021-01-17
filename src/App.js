import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search.js";
import Results from "./components/Results.js";
import Nominations from "./components/Nominations.js";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("Please enter a search term");
  const [nominations, setNominations] = useState([]);
  useEffect(() => {
    axios({
      url: "https://www.omdbapi.com/?apikey=4c2f7b2a&",
      method: "GET",
      params: {
        type: "movie",
        s: searchTerm,
      },
    }).then((response) => {
      if (response.data.Search !== undefined) {
        setSearchResults(response.data.Search);
      } else if (searchTerm === "" || searchTerm === undefined) {
        setError("");
      } else {
        setError();
      }
    });
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <main>
        <Results
          searchTerm={searchTerm}
          searchResults={searchResults}
          error={error}
          setNominations={setNominations}
          nominations={nominations}
        />
        <Nominations setNominations={setNominations} nominations={nominations} />
      </main>
    </div>
  );
}

export default App;
