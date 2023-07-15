import "./Header.css";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const isLoggedIn = !!localStorage.getItem("jwt");

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            The Movie Index
          </Link>
          <a
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link text-light">
                  Movies
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <a href="/favorites" className="nav-link text-light">
                      Favorites
                    </a>
                  </li>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-light">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link text-light">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </header>
  );
}
