import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("rgb(24 24 27)");
  return (
    <div
      className="w-full h-screen duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20">
        <div className="flex gap-5 bg-red-400 rounded-xl px-4 py-3">
          <button
            className="w-20 h-10 bg-red-500 hover:bg-red-600 rounded-full"
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="w-20 h-10 bg-green-500 hover:bg-green-600 rounded-full"
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button
            className="w-20 h-10 bg-blue-500 hover:bg-blue-600 rounded-full"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          <button
            className="w-20 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-full"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

          <button
            className="w-20 h-10 bg-slate-300 hover:bg-slate-400 rounded-full"
            onClick={() => setColor("rgb(203 213 225)")}
          >
            Slate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
