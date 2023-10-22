import React from "react";
import ReactAudioPlayer from "react-audio-player";

// add in audio file from another Dictionary API. Unsure how to reach the audio file in the data

export default function Phonetics(props) {
  console.log(props.phonetics.phonetics.audio);
  if (props.phonetics) {
    return (
      <div className="Phonetics mb-1">
        {props.phonetics.phonetics.map(function(phonetics, index) {
          return (
            <div ClassName="Audio">
              <ReactAudioPlayer src={phonetics.audio} controls />;{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
