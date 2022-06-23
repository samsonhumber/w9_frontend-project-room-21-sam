import "./navbar.css";

function Navbar() {
    return (
        <nav className="nav-container" aria-label='navbar'>
            <ul>
                <li className="nav-appname">

                    <a className="nav-link" href="google.com">
                        App Name
                    </a>
                </li>
                <li className="nav-point">
                    <a className="nav-link" href="google.com" aria-label='catch up page'>
                        Catch Up
                    </a>
                </li>
                <li className="nav-point">
                    <a className="nav-link" href="google.com" aria-label='year book page'>
                        Yearbook
                    </a>
                </li>
                <li className="nav-point">
                    <a className="nav-link" href="google.com" aria-label='home page'>
                        Home
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
