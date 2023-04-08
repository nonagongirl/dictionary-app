import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=cbbfb900d7a3c5f058f2a44a54t3o340`;

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    axios.get(api).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-6">
              <img
                className="dvdpic m-2"
                src="./media/dvd.jpg"
                alt="dick van dyke looking up a word"
              />{" "}
            </div>

            <div className="col-sm-6">
              <div className="prompt">What would you like me to look up?</div>
              <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
              </form>
              <div className="hint">Suggested words: cow, nugget, tone...</div>
            </div>
          </div>
        </div>
      </section>

      <Results results={results} />
    </div>
  );
}
