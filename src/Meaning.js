import React from "react";
import Synonyms from "./Synonyms.js";

// work out how to display sections if they exist and hide if they don't exist but still space evenly. columns?
export default function Meaning(props) {
  if (
    props.meanings.synonyms &&
    props.meanings.example &&
    props.meanings.definition
  ) {
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
              <strong>Use example:</strong>
              <br /> {props.meanings.example}
            </p>
          </div>
          <div className="col-sm-4">
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>{" "}
        </div>
      </div>
    );
  }
  if (props.meanings.synonyms || props.meanings.definition) {
    return (
      <div className="Meaning">
        <h4 class="text-capitalize">{props.meanings.partOfSpeech}</h4>
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-5">
            <p>
              <strong>Definition:</strong>
              <br /> {props.meanings.definition}
            </p>
          </div>
          <div className="col-sm-5">
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>{" "}
        </div>
      </div>
    );
  }
  if (props.meanings.example || props.meanings.definition) {
    return (
      <div className="Meaning">
        <h4 class="text-capitalize">{props.meanings.partOfSpeech}</h4>
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-5">
            <p>
              <strong>Definition:</strong>
              <br /> {props.meanings.definition}
            </p>
          </div>
          <div className="col-sm-5">
            <Synonyms synonyms={props.meanings.example} />
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h4 class="text-capitalize">{props.meanings.partOfSpeech}</h4>
        <div className="row align-items-start justify-content-center">
          <div className="col-sm-5">
            <p>
              <strong>Definition:</strong>
              <br /> {props.meanings.definition}
            </p>
          </div>
          <div className="col-sm-5">
            <Synonyms synonyms={props.meanings.example} />
          </div>{" "}
        </div>
      </div>
    );
  }
}
