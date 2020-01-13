import React from "react";
import { removeTodo } from "../contexts/TodoContext";

export default function Item({ text, index, dispatch }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => dispatch(removeTodo(index))}>Done</span>
    </div>
  );
}
