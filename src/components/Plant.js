import React from "react";
import { removePlant } from "../contexts/PlantContext";
import Timer from './Timer'

export default function Item({ text, index, wateringInterval, placing, plantType, dispatch }) {
  return (
    <div className="Item" key={index}>
    <span style={{color: "#f78585", width: "10px", alignSelf: "flex-end"}} onClick={() => dispatch(removePlant(index))}>X</span>
    <div className="ItemInfo">
      {index + 1} {text}
      <Timer wateringInterval={wateringInterval} index={index} />
    </div>
    <p className="placing">{plantType}</p>
    <p className="placing">Placeras: {placing}</p>
    </div>
  );
}
