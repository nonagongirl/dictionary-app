import React from "react";

// add in audio file from another Dictionary API. Unsure how to reach the audio file in the data

export default function Phonetics(props) {
  console.log(props);
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function(phonetics, index) {
          return (
            <div className="Phonetics mb-1" key={index}>
              <i class="fa-solid fa-microphone-lines"></i>
              {phonetics.phonetics.map(function(phonetics, index) {
                return (
                  <div className="text" key={index}>
                    <i> {phonetics.text}</i>{" "}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
