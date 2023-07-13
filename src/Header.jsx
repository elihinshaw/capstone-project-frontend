import { LogoutLink } from "./LogoutLink";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <a className="navbar-brand text-light" href="/">
          The Movie Index
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/Signup">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/Login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <LogoutLink />
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <br />
    </header>
  );
}
