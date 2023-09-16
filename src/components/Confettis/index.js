import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Confettis = () => {
  const [isRunning, setIsRunning] = useState(true);
  const animationDuration = 8000;
  useEffect(() => {
    const stopAnimation = setTimeout(() => {
      setIsRunning(false);
    }, animationDuration);

    return () => clearTimeout(stopAnimation);
  }, []);

  return <div className="confetti-container">{isRunning && <Confetti />}</div>;
};

export default Confettis;
