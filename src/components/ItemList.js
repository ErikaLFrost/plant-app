import React from "react";
import Item from "./Item";
import { useTodoContext, clearAll } from "../contexts/TodoContext";

export default function ItemList() {
  const { state, dispatch } = useTodoContext();
  const items = state.items;
  console.log(items);

  return (
    <>
      {items.map((item, i) => (
        <Item text={item.name} index={i} key={i} dispatch={dispatch} />
      ))}
      {items.length > 0 && (
        <p
          name="clear-all"
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </p>
      )}
    </>
  );
}
