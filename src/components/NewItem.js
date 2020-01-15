import React, { useState } from "react";
import { useTodoContext, addTodo } from "../contexts/TodoContext";

export default function NewItem() {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  return (
    <form 
    className="ItemInput"
    onSubmit={() => dispatch(addTodo(text))}>
      <input
        name="new-item"
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
