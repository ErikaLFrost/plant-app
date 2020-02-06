import React, { useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { updateTimer, resetTimer } from "../contexts/TodoContext";
import waterImg from "../images/water.png"

export default function Timer({ index }) {
  const { dispatch, state } = useTodoContext();
  console.log(state.items[index].daysUntilWatering);
  const daysUntilWatering = state.items[index].daysUntilWatering;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTimer(index));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (daysUntilWatering > 0) {
    return (
      <span className="Timer" key={index + 1}>
        {daysUntilWatering} dagar till vattning.
      </span>
    );
  } else {
    return (
      <span className="Timer" key={index + 1}>
        <button className="watered" onClick={e => {
        e.preventDefault();
        dispatch(resetTimer(index));
      }}><img alt="watering" src={waterImg}/></button>
      </span>
    );
  }
}
