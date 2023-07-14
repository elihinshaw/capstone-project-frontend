import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    axios
      .post("http://localhost:3000/users.json", formData)
      .then((response) => {
        console.log(response.data);
        event.target.reset();

        axios
          .post("http://localhost:3000/sessions.json", { email, password })
          .then((response) => {
            localStorage.setItem("jwt", response.data.jwt);
            event.target.reset();
            window.location.href = "/";
          })
          .catch((error) => {
            console.log(error.response.data.errors);
            setErrors(["Invalid email or password"]);
          });
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="d-flex justify-content-center">
      <div className="col-6 justify-content-center">
        <h1 className="d-flex justify-content-center">Signup</h1>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input name="name" type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label">
              Password confirmation:
            </label>
            <input
              name="password_confirmation"
              type="password"
              className="form-control"
              id="password_confirmation"
            />
          </div>
          <div className="text-center m-4">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
