import React from "react";
import Plants from "./components/Plants";
import { TodoProvider } from "./contexts/TodoContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Plants />
      </TodoProvider>
    </div>
  );
}

export default App;
