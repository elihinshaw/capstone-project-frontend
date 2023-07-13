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
    <div id="signup">
      <h1>Signup</h1>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
