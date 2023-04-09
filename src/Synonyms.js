import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonym">
        <p>
          <strong>Similar:</strong>
        </p>
        <ul className="Synonyms">
          {props.synonyms.map(function(synonym, index) {
            return <li key={index}> {synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
