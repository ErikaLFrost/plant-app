import React from "react";
import Plant from "./Plant";
import { usePlantContext, clearAll } from "../contexts/PlantContext";

export default function PlantList() {
  const { state, dispatch } = usePlantContext();
  const items = state.items;

  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <Plant
            text={item.name}
            wateringInterval={item.wateringInterval}
            placing={item.plantPlacing}
            plantType={item.plantType}
            index={i}
            key={i}
            dispatch={dispatch}
          />
        </React.Fragment>
      ))}
      {items.length > 0 && (
        <p
          name="clear-all"
          style={{ fontSize: "15px", cursor: "pointer", color: "#f78585" }}
          onClick={() => dispatch(clearAll())}
        >
          Ta bort alla
        </p>
      )}
    </>
  );
}
