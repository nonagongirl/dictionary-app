import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-6">
          <p>Definition: {props.meanings.definition}</p>
        </div>
      </div>
      <div className="col-sm-6">
        {" "}
        <p>Example: {props.meanings.example}</p>
      </div>
      <br />
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
