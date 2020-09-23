import React, { useState } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { push } = useHistory();

  const handleChanges = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", state)
      .then((res) => {
        console.log("POST res: ", res);
        localStorage.setItem("token", res.data.token);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={register}>
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
          <button>Signup</button>
          <Link to="/login">
            <h6>Login</h6>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
