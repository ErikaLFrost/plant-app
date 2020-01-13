import React from "react";
import Todos from "./components/Todos";
import { TodoProvider } from "./contexts/TodoContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
