import "./biography.css";

function Biography({ bcName, id, avatar, region, jobTitle, desc }) {
  return (
    <div className="div-container" aria-label='profile-bio'>
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
      <a className="link" href="https://www.schoolofcode.co.uk/">
        <i>Click to expand</i>
      </a>
    </div>
  );
}
export default Biography;
