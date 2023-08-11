//hooks

import { useState } from "react";
import data from "./data/db";
import List from "./data/components/List";
import "./App.css";

function App() {
  const [persons, setPeople] = useState(data);
  console.log(persons);

  const deleteUser = (id) => {
    const users = persons.filter((person) => {
      return person.id !== id
    })

    setPeople(users)
  }
  return (
    <div className="container">
      <h1>{persons ? persons.length : 0} birthday today</h1>
      <List persons={persons} deleteUser={deleteUser} />
      {persons.length ? (
        <button
          onClick={() => {
            setPeople([]);
          }}
          className="clear-btn"
        >
          Clear button
        </button>
      ): null}
      {!persons.length ? (
        <button
          onClick={() => {
            setPeople(data);
            console.log(persons)
          }}
          className="clear-btn"
        >
          Refresh button
        </button>
      ): null}
      
    </div>
  );
}

export default App;
