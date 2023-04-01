import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <i>{props.phonetics}</i>
    </div>
  );
}
// add in audio file from another API?
