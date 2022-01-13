import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Jiggy(props) {
  const [mood, setMood] = useState(false);

  function changeMood() {
    setMood(true);
  }

  function moodStatus() {
    setMood(false);
  }

  return (
    <div>
      <button onClick={changeMood}>Click</button>
      <h4> Jiggy is </h4>
      {mood ? <div>Grumpy</div> : <div>Grounded</div>}
      {mood ? <Modal onCancel={moodStatus} onConfirm={moodStatus} /> : ""}
      {mood ? <Backdrop onCancel={moodStatus} /> : ""}
    </div>
  );
}

export default Jiggy;
