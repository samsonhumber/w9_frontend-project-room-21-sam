import "./biography.css";
// import {useState} from "react"

function Biography({ bcName, id, avatar, region, jobTitle, desc }) {
  return (
    <div className="div-container">
      <img
        className="bootcamper-picture"
        src={avatar}
        alt="bio for bootcampers"
      />
      <p className="name" key={id}>
        {bcName}
      </p>
      <p className="region">
        <b>{region}</b>
      </p>
      <p className="jobTitle">
        <em>{jobTitle}</em>
      </p>
      <p className="bio">"{desc}"</p>
      <a className="link" href="https://www.google.com/">
        <i>Click to expand</i>
      </a>
    </div>
  );
}
export default Biography;
