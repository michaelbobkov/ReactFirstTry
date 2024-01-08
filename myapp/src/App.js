import NewComponent from "./NewComponent";
import AddPerson from "./AddPerson"
import React, { useState } from "react";

function App() {

  const [people, setPeople] = useState([
    { name: "Ben", age: 20, Tshirt: "black", id: 0 },
    { name: "Bam", age: 22, Tshirt: "green", id: 1 },
    { name: "Sam", age: 220, Tshirt: "yellow", id: 2 }
  ])

  const addPerson = (event, person) => {
    event.preventDefault()
    person.id = Math.random()
    setPeople([...people, person])
  };

  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello!</p>
      <NewComponent people={people}/>
      <AddPerson addPerson={addPerson}/>
    </div>
  );
}

export default App;
