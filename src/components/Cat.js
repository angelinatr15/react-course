import { useState } from "react";

function Cat(props) {
  function changeName() {
    setCatName("Roe");
  }

  const [catName, setCatName] = useState("Jiggy");

  return (
    <div>
      <h1>{catName}</h1>
      <button onClick={changeName}>Change Name</button>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Cat;