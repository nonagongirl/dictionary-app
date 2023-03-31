import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>

      <p>
        Definition: {props.meanings.definition} <br />
        Example: {props.meanings.example}
        <br />
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
