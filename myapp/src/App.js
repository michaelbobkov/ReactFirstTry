import NewComponent from "./NewComponent";


function App() {

  var people = [
    {name: "Ben", age: 20, Tshirt: "black", id: 0},
    {name: "Bam", age: 22, Tshirt: "green", id: 1},
    {name: "Sam", age: 220, Tshirt: "yellow", id: 2}
  ]

  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello!</p>
      <NewComponent people={people}/>
    </div>
  );
}

export default App;
