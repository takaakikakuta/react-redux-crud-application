import React from "react";

function App() {
  const dom = "Hello World";
  return (
    <React.Fragment>
      <h1 className="test">{dom}</h1>
      <label htmlFor="bar">bar</label>

    </React.Fragment>
  );
}

export default App;
