import { useState } from "react";
import Cat from "./components/Cat";
import Jiggy from "./components/Jiggy";
import Todo from "./components/Todo";

function App() {
  const [name, setName] = useState("Jiggy");

  function handleClick() {
    console.log("something");
    setName("Roe");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Change Name</button>
      <h1>My To Do's</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
      <Jiggy />
      <Cat name={name} />
    </div>
  );
}

export default App;
