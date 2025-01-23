import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timerRef.current);
            toggleSession();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const toggleSession = () => {
    setIsSession(!isSession);
    setTime(isSession ? 5 * 60 : 25 * 60); // Switch between session and break
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setIsSession(true);
    setTime(25 * 60);
  };

  return (
    <div className="timer-container">
      <h2>{isSession ? 'Session' : 'Break'}</h2>
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
