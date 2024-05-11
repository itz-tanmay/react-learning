import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button
          onClick={() => {
            counter < 20 ? setCounter(counter+1) : setCounter(counter);
          }}
        >
          Increase Value
        </button>
        <br />
        <button
          onClick={() => {
            counter <= 0 ? setCounter(counter) : setCounter(counter - 1);
          }}
        >
          Decrease Value
        </button>
      </div>
    </>
  );
}

export default App;
