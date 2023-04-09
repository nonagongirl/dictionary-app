import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics mb-1">
      <i class="fa-solid fa-microphone-lines"></i> <i>{props.phonetics}</i>
    </div>
  );
}
// add in audio file from another API?
