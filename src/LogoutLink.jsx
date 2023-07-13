import React from "react";
import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      style={{ color: "white" }}
      className="nav-link"
    >
      Logout
    </a>
  );
}
