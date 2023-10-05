import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import Photos from "./Photos";

//getting audio api to work in nested arrays is difficuly. may need help

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 class="text-capitalize">{props.results.word}</h2>
          {props.phonetics.data.map(function(phonetics, index) {
            return (
              <section key={index}>
                <Phonetics phonetics={phonetics} />
              </section>
            );
          })}
        </section>

        <Photos photos={props.photos} />

        {props.results.meanings.map(function(meanings, index) {
          return (
            <section key={index}>
              <Meaning meanings={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
