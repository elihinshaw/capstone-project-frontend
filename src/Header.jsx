// import { LogoutLink } from "./LogoutLink";
// import "./Header.css";

// export function Header() {
//   const isLoggedIn = !!localStorage.getItem("jwt");

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-gray">
//         <a className="navbar-brand text-light" href="/">
//           The Movie Index
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link text-light" href="/">
//                 Movies
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-light" href="/signup">
//                 Signup
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-light" href="/login">
//                 {!isLoggedIn ? <li>Login</li> : <li className="disabled"></li>}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-light" href="/favorites">
//                 Favorites
//               </a>
//             </li>
//             <li className="nav-item">
//               <LogoutLink />
//             </li>
//           </ul>
//           <form className="form-inline my-2 my-lg-0">
//             <div className="input-group">
//               <input
//                 className="form-control"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <div className="input-group-append">
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </nav>
//       <br />
//     </header>
//   );
// }
import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const isLoggedIn = !!localStorage.getItem("jwt");

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <Link to="/" className="navbar-brand text-light">
          The Movie Index
        </Link>
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
              <Link to="/" className="nav-link text-light">
                Movies
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/favorites" className="nav-link text-light">
                    Favorites
                  </Link>
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
          {/* <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </nav>
      <br />
    </header>
  );
}
