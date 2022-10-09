import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./useWordGame";
import styles from "./styles.css";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame();

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount} </h1>
    </div>
  );
}

export default App;
