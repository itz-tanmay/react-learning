import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let randomStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNum) randomStr += "0123456789";
    if (allowChar) randomStr += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * randomStr.length + 1);
      pass += randomStr.charAt(charIdx);
    }

    setPassword(pass);
  }, [length, allowNum, allowChar, setPassword]);

  const copyPassword = useCallback((e) => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
    e.target.innerText = "Copied!";
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNum, allowChar, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto rounded-xl px-5 my-8 bg-zinc-800 text-center mt-10 py-10 text-gray-200">
        <h1 className="text-2xl text-center text-slate-300 mb-10">
          Password Generator
        </h1>
        <div className="flex overflow-hidden mb-5 rounded-xl gap-x-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 my-0 rounded-md text-zinc-900"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-400 text-slate-900 px-4 py-0.5 shrink-0 rounded-md"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                setAllowNum(!allowNum);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="charInput"
              onChange={() => {
                setAllowChar(!allowChar);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
