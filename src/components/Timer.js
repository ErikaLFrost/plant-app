import React, { useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { updateTimer } from "../contexts/TodoContext";

export default function Timer({ index }) {
  const { dispatch, state } = useTodoContext();
  console.log(state.items[index].daysUntilWatering);
  const daysUntilWatering = state.items[index].daysUntilWatering;
  

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTimer(index));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
      <span className="App" key={index + 1}>
          {daysUntilWatering} dagar till vattning.
      </span>
    );
}
