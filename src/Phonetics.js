import React from "react";
import ReactAudioPlayer from "react-audio-player";

// add in audio file from another Dictionary API. Unsure how to reach the audio file in the data

export default function Phoneticc(props) {
  console.log(props.phonetics);

  if (props.phonetics) {
    return (
      <div className="Phonetics mb-1">
        <div ClassName="Audio">
          <ReactAudioPlayer src={props.phonetics.audio} controls />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
