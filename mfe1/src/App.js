import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>MFE 1</h2>

      {counter}

      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Click
      </button>
    </div>
  );
};

export default App;
