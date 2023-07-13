import { LogoutLink } from "./LogoutLink";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a style={{ color: "white" }} className="navbar-brand" href="/">
          The Movie Index
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a style={{ color: "white" }} className="nav-link" href="/">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "white" }} className="nav-link" href="/Signup">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "white" }} className="nav-link" href="/Login">
                Login
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li style={{ color: "white" }} className="nav-item">
              <LogoutLink />
            </li>
          </ul>
        </div>
      </nav>
      <br />
    </header>
  );
}
