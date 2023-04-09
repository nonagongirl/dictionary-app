import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  if (props.meanings.example) {
    return (
      <div className="Meaning">
        <h4 class="text-capitalize">{props.meanings.partOfSpeech}</h4>
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-4">
            <p>
              <strong>Definition:</strong>
              <br /> {props.meanings.definition}
            </p>
          </div>
          <div className="col-sm-4">
            {" "}
            <p>
              <strong>Example:</strong>
              <br /> {props.meanings.example}
            </p>
          </div>
          <div className="col-sm-4">
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h4 class="text-capitalize">{props.meanings.partOfSpeech}</h4>
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-4">
            <p>
              <strong>Definition:</strong>
              <br /> {props.meanings.definition}
            </p>
          </div>
          <div className="col-sm-4">
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>{" "}
        </div>
      </div>
    );
  }
}
