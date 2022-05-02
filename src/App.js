import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // side effect will only run the first time component renders

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []); // second argument is an empty array

  // useEffect(
  //   // 1st arg: side effect (callback function)
  //   () => console.log("useEffect called"),
  //   // 2nd arg: dependencies array
  //   [count]
  // );

  // update outside of DOM, the document (tab) name

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
