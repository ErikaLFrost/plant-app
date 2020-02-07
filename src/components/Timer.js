import React, { useEffect } from "react";
import { usePlantContext, updateTimer, resetTimer } from "../contexts/PlantContext";
import waterImg from "../images/water.png"

export default function Timer({ index }) {
  const { dispatch, state } = usePlantContext();
  const daysUntilWatering = state.items[index].daysUntilWatering;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTimer(index));
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  if (daysUntilWatering > 0) {
    return (
      <span className="Timer">
        {daysUntilWatering} dagar till vattning.
      </span>
    );
  } else {
    return (
      <span className="Timer">
        <button className="watered" onClick={e => {
        e.preventDefault();
        dispatch(resetTimer(index));
      }}><img alt="watering" src={waterImg}/></button>
      </span>
    );
  }
}
