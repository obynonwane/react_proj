import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHander = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHander}>
        <label htmlFor="username">Username</label>
        <imput id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;