import React from "react";
import { removeTodo } from "../contexts/TodoContext";
import Timer from './Timer'

export default function Item({ text, index, wateringInterval, placing, plantType, dispatch }) {
  return (
    <div className="Item">
    <span style={{color: "red", width: "10px", alignSelf: "flex-end"}} onClick={() => dispatch(removeTodo(index))}>X</span>
    <div className="ItemInfo" key={index}>
      {index + 1} {text}
      <Timer wateringInterval={wateringInterval} index={index} />
    </div>
    <p className="placing">{plantType}</p>
    <p className="placing">Placeras {placing}</p>
    </div>
  );
}
