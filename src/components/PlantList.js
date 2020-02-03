import React from "react";
import Plant from "./Plant";
import { useTodoContext, clearAll } from "../contexts/TodoContext";

export default function ItemList() {
  const { state, dispatch } = useTodoContext();

  console.log(state);

  if (state === null) {
    console.log('state === null');
    return [];
  } else {
    return (
      <>
        {state.items.map((item, i) => (
          <Plant text={item.name} index={i} key={i} dispatch={dispatch} />
        ))}
        {state.items.length > 0 && (
          <p
            name="clear-all"
            style={{ fontSize: "15px", cursor: "pointer", color: "#fc4040" }}
            onClick={() => dispatch(clearAll())}
          >
            Ta bort alla
          </p>
        )}
      </>
    );
  }
}
