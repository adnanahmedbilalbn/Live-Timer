import React, { useState } from "react";

function App() {
  // let Time = new Date().toLocaleTimeString();

  // var Time = new Date().toLocaleTimeString();
  const [time, updTime] = useState("Time");

  function getTime() {
    updTime(new Date().toLocaleTimeString());
    // console.log(time);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
