import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics mb-1">
        <div className="Audio">
          <ReactAudioPlayer src={props.phonetics.audio} controls />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
