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
    <div>{plantInfo}</div>
      <input
        name="new-item"
        type="text"
        placeholder="New Task"
        value={plantName}
        onChange={e => setplantName(e.target.value)}
      ></input>
      <Autocomplete
        onItemSelected={onItemSelected}
      ></Autocomplete>
      <button>Add</button>
    </form>
  );
}
