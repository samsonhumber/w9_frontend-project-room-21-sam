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
    </div>
  );
}
export default Biography;
