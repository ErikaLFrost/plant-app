import React from "react";
import PlantList from "./PlantList";
import NewPlant from "./NewPlant";

export default function Todo() {
  return (
    <header className="App-header">
      <h2>Välkommen till växt-hjälpen!</h2>
      <NewPlant />
      <PlantList />
    </header>
  );
}
