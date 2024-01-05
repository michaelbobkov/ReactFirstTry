import NewComponent from "./NewComponent";


function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello!</p>
      <NewComponent name={"Michael"} age={21} Tshirt={"Black"}/>
    </div>
  );
}

export default App;
