import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <li className="nav-appname">
        <a className="nav-link" href="google.com">
          App Name
        </a>
      </li>
      <li className="nav-point">
        <a className="nav-link" href="google.com">
          Home
        </a>
      </li>
      <li className="nav-point">
        <a className="nav-link" href="google.com">
          Yearbook
        </a>
      </li>
      <li className="nav-point">
        <a className="nav-link" href="google.com">
          Catch Up
        </a>
      </li>
    </nav>
  );
}

export default Navbar;
