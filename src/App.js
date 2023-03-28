import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHander = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: prevState.length + 1 },
      ];
    });
  };
  return (
    <div>
      <AddUser onAdduser={addUserHander} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
