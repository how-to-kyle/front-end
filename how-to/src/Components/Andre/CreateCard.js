import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const CreateCard = (props) => {
  const [formInputs, setFormInputs] = useState({ title: "" });
  const history = useHistory();

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/posts", formInputs)
      .then((res) => {
        console.log(res);
        history.push("/how-to-list");
        setFormInputs({ title: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>CreateCardComponent</h3>
      <div className="create-card">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formInputs.title}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateCard;
