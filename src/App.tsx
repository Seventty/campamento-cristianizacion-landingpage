import React from "react";
import { CountDown } from "./components";
import "./App.css";

const App = () => {
  const defaultstamp: number = 1659983662000;
  const timestamp: number = 2 * 3 * 55 * 60 * 60 * 1000 + defaultstamp;
  return (
    <div className="home">
      <CountDown countdownTimestampMs={timestamp} />
    </div>
  );
};
export default App;

