import React, { useState } from "react";
import { useTodoContext, addTodo } from "../contexts/TodoContext";
import plantInfo from "../plantInfo.json";

export default function NewItem() {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  return (
    <div className="ItemInput">
      <input
        name="new-item"
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <ul>
        {plantInfo.plants.map((plants, i) => {
          return <li key={i}>{plants.name}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
}
