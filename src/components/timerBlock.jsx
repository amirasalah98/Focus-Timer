import { useState, useEffect, useRef } from "react";

function TimerBlock() {
  const [data, setData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const audioRef = useRef(null);

  // Load data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("focusBlock"));
    if (!saved) return;

    setData(saved);

    // seconds or minutes 
    const seconds =
      saved.unit === "seconds"
        ? saved.duration
        : saved.duration * 60;

    setTimeLeft(seconds);
  }, []);

  useEffect(() => {
  audioRef.current = new Audio("/alarm.mp3");
}, []);
  // Timer
  useEffect(() => {
    if (!isRunning || finished) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          audioRef.current?.play();

          setIsRunning(false);
          setFinished(true);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, finished]);

  // 🔹 format time
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  // 🔹 restart handler (clean reset)
  const handleRestart = () => {
    const seconds =
      data.unit === "seconds"
        ? data.duration
        : data.duration * 60;

        if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }
    setTimeLeft(seconds);
    setFinished(false);
    setIsRunning(true);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2 className="m-0">Hi, {data.name}</h2>

      {/* 🔥 TIMER VIEW */}
      {!finished ? (
        <>
        <h3 className="m-4">Your goal is {data.focus}</h3>
          <h1>{formatTime(timeLeft)}</h1>

          {!isRunning ? (
            <button  className="m-4"  onClick={() => setIsRunning(true)}>
              Start
            </button>
          ) : (
            <button  className="m-4"  onClick={() => setIsRunning(false)}>
              Pause
            </button>
          )}
        </>
      ) : (
        <div>
          <h2 className="congrats">Goal completed!</h2>
          <h3 className="congrats-msg">You have achieved your focus session.</h3>

          <button className="m-4" onClick={() => (window.location.href = "/")}>
            Done
          </button>

          <button  className="m-4" onClick={handleRestart}>
            Start Again
          </button>
        </div>
      )}
    </>
  );
}

export default TimerBlock;