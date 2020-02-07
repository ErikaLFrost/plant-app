import React from "react";
import PlantList from "./PlantList";
import NewPlant from "./NewPlant";

export default function Plants() {
  return (
    <header className="App-header">
      <h2>Välkommen till Växt-hjälpen!</h2>
      <div className="intro">
      <p style={{marginBottom:"7px"}}>Visste du att växter boostar vår kreativitet, 
      produktivitet, koncentrationsförmåga och vårt humör? 
        Dessutom reducerar de stress och trötthet och renar luften från gifter.</p>
        <p style={{margin:"4px 0 7px"}}>Det finns alltså gott om anledningar att ta 
        väl hand om dina gröna kompisar, hjälpen finns här!</p>
        Registrera dina växter här och få påminnelser om vattning och tips om vart de trivs bäst.</div>
      <NewPlant />
      <PlantList />
    </header>
  );
}
