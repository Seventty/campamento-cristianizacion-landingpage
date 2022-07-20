import React from "react";
import { Information, CountDown, Versicle, Footer } from "./components";
import "./App.css";

const App = () => {
  const defaultstamp: number = 1659983662000;
  const timestamp: number = 2 * 3 * 55 * 60 * 60 * 1000 + defaultstamp;
  return (
    <div>
      {/* <Header/> */}
      <CountDown countdownTimestampMs={timestamp} />
      <Information/>
      <Versicle/>
      <Footer/>
    </div>
  );
};
export default App;
