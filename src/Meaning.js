import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>

      <p>{props.meanings.definition} </p>
      <p>{props.meanings.example}</p>
    </div>
  );
}
