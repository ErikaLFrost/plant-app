import React, { useState } from "react";
import { usePlantContext, addPlant } from "../contexts/PlantContext";
import Autocomplete from "./Autocomplete";

export default function NewItem() {
  const [plantName, setplantName] = useState("");
  const [plantInfo, setPlantInfo] = useState([]);
  const { dispatch } = usePlantContext();

  const onItemSelected = selectedItem => {
    setPlantInfo([
      selectedItem.name,
      selectedItem.wateringInterval,
      selectedItem.placing
    ]);
  };

  return (
    <form
      className="ItemInput"
      onSubmit={e => {
        e.preventDefault();
        dispatch(addPlant(plantName, plantInfo));
        setPlantInfo([]);
        setplantName("");
      }}
    >
      <label style={{ marginTop: "1rem", display: "block" }}>
        Vad heter din växt?
      </label>{" "}
      <input
        name="newItem"
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
