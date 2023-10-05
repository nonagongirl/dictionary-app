import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {" "}
        <section>
          <div className="row">
            {props.photos.map(function(photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={photo.src.landscape}
                      className="img-fluid d-flex flex-wrap"
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
