import "./Header.css";
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const isLoggedIn = !!localStorage.getItem("jwt");

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray ">
        <div className="container">
          <Link to="/" className="navbar-brand text-light ">
            The Movie Index
          </Link>
          <button
            className="navbar-toggler bg-light"
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
            <ul className="navbar-nav ms-auto">
              <div className="d-flex flex-grow-1">
                <li className="nav-item">
                  <a href="/" className="nav-link text-light">
                    Movies
                  </a>
                </li>
              </div>
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
    </header>
  );
}
