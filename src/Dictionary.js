import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";

import "./Dictionary.css";

import "bootstrap/dist/css/bootstrap.min.css";
import dvd from "./media/dvd.jpg";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [phonetics, setPhonetics] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePhoneticsResponse(response) {
    console.log(response.data);
    setPhonetics(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=cbbfb900d7a3c5f058f2a44a54t3o340`;
    axios.get(api).then(handleResponse);

    let phoneticsApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(phoneticsApi).then(handlePhoneticsResponse);

    let numberOfPics = "6";
    let pexelsApi = `VnvDmIDC2RPC6PEiATMR2i6s7nOO5dVFwYYVhFHbOiul8D5FjCkgfyIw`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=${numberOfPics}`;
    let headers = { Authorization: `${pexelsApi}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section className="searchSection">
          <div className="container">
            <div className=" row align-items-center justify-content-center">
              <div className="col-sm-4">
                <img
                  className="dvdpic m-2"
                  src={dvd}
                  alt="dick van dyke looking up a word"
                />{" "}
              </div>

              <div className="col-sm-8">
                <div className="prompt">What would you like me to look up?</div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    onChange={handleKeywordChange}
                    placeholder="Type here!"
                  />
                </form>
                <div className="hint">
                  Suggested words: cow, nugget, tone...
                </div>
              </div>
            </div>
          </div>
        </section>

        <Results results={results} photos={photos} phonetics={phonetics} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
