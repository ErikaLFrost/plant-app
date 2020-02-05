import React from "react";
import { removeTodo } from "../contexts/TodoContext";
import Timer from './Timer'

export default function Item({ text, index, wateringInterval, dispatch }) {
  return (
    <div className="Item" key={index}>
      {index + 1} {text} {wateringInterval}
      <Timer wateringInterval={wateringInterval} index={index} />
      <span onClick={() => dispatch(removeTodo(index))}>Ta bort</span>
    </div>
  );
}
