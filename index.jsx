import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
