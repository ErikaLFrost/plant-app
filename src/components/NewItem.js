import React, { useState } from "react";
import { useTodoContext, addTodo } from "../contexts/TodoContext";

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
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
}
