import React, { useState } from "react";
import { useTodoContext, addTodo } from "../contexts/TodoContext";
import Autocomplete from "./Autocomplete";

export default function NewItem() {
  const [plantName, setplantName] = useState("");
  const [plantInfo, setPlant] = useState("Select an Item");
  const { dispatch } = useTodoContext();

  const onItemSelected = selectedItem => {
    setPlant(selectedItem.name);
  };

  return (
    <form
      className="ItemInput"
      onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(plantName, plantInfo));
      }}
    >
      <label style={{ marginTop: "1rem", display: "block" }}>
        Vad heter din växt?
      </label>{" "}
      <input
        name="new-item"
        type="text"
        placeholder="Växtnamn"
        value={plantName}
        onChange={e => setplantName(e.target.value)}
      ></input>
      <Autocomplete onItemSelected={onItemSelected}></Autocomplete>
      <button>Lägg till</button>
    </form>
  );
}
