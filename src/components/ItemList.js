import React from "react";
import Item from "./Item";
import { useTodoContext, clearAll } from "../contexts/TodoContext";

export default function ItemList() {
  const { items, dispatch } = useTodoContext();

  return (
    <>
      {items.map((item, i) => (
        <Item text={item} index={i} key={i} dispatch={dispatch} />
      ))}
      {items.length > 0 && (
        <p
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </p>
      )}
    </>
  );
}
