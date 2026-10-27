
import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && <h1>Hello, {name}!</h1>}
    </div>
  );
}

export default App;
