import React from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";

export default function Todo() {
  return (
    <header className="App-header">
      <h2>ToDo App</h2>
      <NewItem />
      <ItemList />
    </header>
  );
}
