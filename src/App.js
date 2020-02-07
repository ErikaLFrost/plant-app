import React from "react";
import Plants from "./components/Plants";
import { PlantProvider } from "./contexts/PlantContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PlantProvider>
        <Plants />
      </PlantProvider>
    </div>
  );
}

export default App;
