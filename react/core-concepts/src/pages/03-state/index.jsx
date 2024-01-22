import { useState } from "react";

function StatePage() {
  const [counter, setCounter] = useState(0);
  const [onOff, setOnOff] = useState(false);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);
  return (
    <div style={{ backgroundColor: onOff ? "#fff" : "#000" }}>
      <h1 onClick={() => setOnOff(!onOff)}>Counter</h1>
      <h3>{counter}</h3>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default StatePage;
