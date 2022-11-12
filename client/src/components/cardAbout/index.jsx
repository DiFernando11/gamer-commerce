import React from "react";
import "./index.css";

function CardAbout({ developer }) {
  return (
    <div className="cardAboutDevelop">
      <div className="imgBx">
        <img src={developer.image} alt="images" />
      </div>
      <div className="details">
        <h2>
          {developer.name}
          <br />
          <div className="flexContainerAboutPresentation">
            <span>{developer.rol}</span>
            <span>
              <a href={developer.github} target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </span>

            {developer.linkendin && (
              <span>
                <a href={developer.linkendin} target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            )}
            {developer.portfolio && (
              <span>
                <a href={developer.portfolio} target="_blank">
                <i className="bi bi-person-workspace"></i>
                </a>
              </span>
            )}
   
          </div>
        </h2>
      </div>
    </div>
  );
}

export default CardAbout;
