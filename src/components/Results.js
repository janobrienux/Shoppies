import React from "react";

const Results = ({ searchTerm, searchResults, error, setNominations, nominations }) => {
  const handleNomination = (newNomination) => {
    if (nominations.length === 5) {
      alert("Unfortunately can only nominate 5 films!");
    } else {
      const updatedNominations = [...nominations, newNomination];
      setNominations(updatedNominations);
      localStorage.setItem("nominations", JSON.stringify(updatedNominations));
    }
  };

  const checkNomination = (id) => {
    return nominations.filter((nomination) => nomination.imdbID === id).length;
  };

  return (
    <section className="results">
      <h2>Results</h2>
      <p>{error ? `${error}` : `Results for "${searchTerm}"`}</p>
      <ul>
        {searchResults.map((result) => {
          return (
            <li key={result.imdbID}>
              {result.Title} ({result.Year})
              <button disabled={checkNomination(result.imdbID)} onClick={() => handleNomination(result)}>
                Nominate
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Results;
