import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      <button onClick={updateCount}>Click me</button>
    </div>
  );
};

export default App;
