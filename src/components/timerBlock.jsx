import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';

function TimerBlock(){
    const [data, setData] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const handleStart = () => {
  if (!data) return;

  setTimeLeft((prev) => {
    // only start fresh if never started
    if (prev === 0 || prev === initialTime) {
      return initialTime;
    }
    return prev;
  });

  setIsRunning(true);
};
    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('focusBlock'));
    if (!saved) return;
    setData(saved);
    setInitialTime(saved.duration * 60); // 🔥 store base duration once
  setTimeLeft(saved.duration * 60);
  }, []);
  useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning]);

  function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
if (!data) return <p>Loading...</p>;
return(
    <>
    <h2>Hi, {data.name}</h2>
    <span className='d-block py-4'>"Focus on what matters, one block at a time"</span>
    <div>
        <div className='createBlock py-5'>
            <h2 className='py-0'>{data.focus}</h2>
            {/* <p>Time now is  {data.createdAtDisplay}</p> */}

<h1 className='py-5'>
  {timeLeft > 0 ? formatTime(timeLeft) : `${data.duration} mins`}
</h1>
{!isRunning && timeLeft === 0 && (
  <button onClick={handleStart}>
    Begin Focus Session
  </button>
)}

{!isRunning && timeLeft > 0 && (
  <button onClick={() => setIsRunning(true)}>
    Resume
  </button>
)}

{isRunning && (
  <div className="d-flex gap-3 justify-content-center">
    <button onClick={() => setIsRunning(false)}>
      Pause
    </button>

    <button onClick={() => window.location.href = "/"}>
      Exit
    </button>
  </div>
)}
    </div>
        
    </div>
    </>
)
}
export default TimerBlock;