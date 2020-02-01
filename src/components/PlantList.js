import React from "react";
import Plant from "./Plant";
import { useTodoContext, clearAll } from "../contexts/TodoContext";

export default function ItemList() {
  const { state, dispatch } = useTodoContext();
  const items = state.items;
  console.log(items);

  return (
    <>
      {items.map((item, i) => (
        <Plant text={item.name} index={i} key={i} dispatch={dispatch} />
      ))}
      {items.length > 0 && (
        <p
          name="clear-all"
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => dispatch(clearAll())}
        >
          Ta bort alla
        </p>
      )}
    </>
  );
}
