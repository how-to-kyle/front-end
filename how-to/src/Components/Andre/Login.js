import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  // const credentials = { email: "", password: "" };
  // const [state, setState] = useState(credentials);
  const [state, setState] = useState({ email: "", password: "" });
  const { push } = useHistory();

  const handleChanges = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/login", state)
      .then((res) => {
        console.log("POST res: ", res);

        localStorage.setItem("token", res.data.token);
        push("/how-to-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            placeholder="LambdaSchool"
            value={state.email}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="i<3Lambd4"
            value={state.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
          <Link to="/register">
            <h6>Signup</h6>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
