import React, { useState } from "react";
import { useTodoContext, addTodo } from "../contexts/TodoContext";
import Autocomplete from "./Autocomplete";

export default function NewItem() {
  const [plantName, setplantName] = useState("");
  const [wateringInterval, setWateringInterval] = useState(0);
  const [plantInfo, setPlant] = useState("Select an Item");
  const [plantPlacing, setPlantPlacing] = useState("");
  const { dispatch } = useTodoContext();

  const onItemSelected = selectedItem => {
    setWateringInterval(selectedItem.wateringInterval);
    setPlantPlacing(selectedItem.placing)
    setPlant(selectedItem.name);
  };

  return (
    <form
      className="ItemInput"
      onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(plantName, plantInfo, wateringInterval, plantPlacing));
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
