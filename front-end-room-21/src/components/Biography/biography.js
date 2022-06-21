import "./biography.css";
// import {useState} from "react"

function Biography({ bcName, id }) {
  return (
    <div className="main-container">
      <div className="div-Container">
        <img
          className="bootcamper-picture"
          src="https://static.vecteezy.com/system/resources/previews/002/002/247/non_2x/beautiful-black-woman-avatar-character-icon-free-vector.jpg"
          alt="bio for bootcampers"
        />
        <p className="name" key={id}>
          {bcName}
        </p>
        <p className="jobTitle">
          <em> Current Bootcamper</em>
        </p>
        <p className="region">
          <b>Birmingham</b>
        </p>
        <p className="bio">
          "Looking for side-projects partners or Team! more info in bio!"{" "}
        </p>
        <a className="link" href="https://www.google.com/">
          click more
        </a>
      </div>
    </div>
  );
}
export default Biography;
