import React from "react";

const Results = ({ searchTerm, searchResults, error, setNominations, nominations }) => {
  const handleNomination = (newNomination) => {
    if (nominations.length === 5) {
      alert("Unfortunately you can only nominate 5 films!");
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
      <p className="results">{error ? `${error}` : `Results for "${searchTerm}"`}</p>
      <ul>
        {searchResults.map((result) => {
          return (
            <li className="d-inline-flex" key={result.imdbID}>
              <div className="card ">
                <h5 className="card-title">{result.Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{result.Year}</h6>
                <img alt="test" src={result.Poster} />
                <button disabled={checkNomination(result.imdbID)} onClick={() => handleNomination(result)}>
                  Nominate
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Results;
