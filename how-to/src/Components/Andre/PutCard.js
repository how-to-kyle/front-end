import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const PutCard = () => {
  const [formInput, setFormInput] = useState({
    title: "",
  });
  const { id } = useParams();
  let history = useHistory();

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput)
    axiosWithAuth()
      .put(`/posts/${id}`, formInput)
      .then((res) => {
        console.log("Put request", res);
        // setFormInput({
        //   title: "",
        // });
        // history.push("/how-to-list/posts");
      })
      .catch((err) => console.log(err.response));
  };

  const deleteMovie = () => {
    axiosWithAuth()
      .delete(`posts/${id}`)
      .then((res) => history.push("/how-to-list/posts"))
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="edit-card">
      <h3>PUT PUT PUT PUT PUT </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          name="title"
          value={formInput.title}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="save-button">
          Update Movie
        </button>
      </form>

      <button className="delete-button" onClick={deleteMovie}>
        Delete
      </button>
    </div>
  );
};

export default PutCard;
