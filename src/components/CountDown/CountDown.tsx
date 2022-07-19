import React, { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownTimerUtils";
import "./styles.css";

type Props = {
  countdownTimestampMs: any;
};

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountDown: React.FC<Props> = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown: any) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <div className="container countdown__container">
      <span>{remainingTime.days}</span>
      <span>Días</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>Horas</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>Minutos</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>Segundos</span>
    </div>
  );
};

export default CountDown;
