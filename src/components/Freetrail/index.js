

import React, { useState, useEffect } from "react";
import "./index.css";

function FreeTrial() {
  const calculateTimeLeft = () => {
    const deadline = new Date("December 31, 2023 23:59:59").getTime();  
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="trail-main" id="freetrail">
      <p className="trail-p">
        🚀 Get Instant Free Trial Access on How to Crack the GMAT
        <br />
        Within 60 Days
      </p>
      <div className="time">
        <div className="sm-box shadow">
          <p className="p-time">{time.days}</p>
          <p className="p-time1">Days</p>
        </div>
        <div className="sm-box shadow">
          <p className="p-time">{time.hours}</p>
          <p className="p-time1">Hours</p>
        </div>
        <div className="sm-box shadow">
          <p className="p-time">{time.minutes}</p>
          <p className="p-time1">Minutes</p>
        </div>
        <div className="sm-box shadow">
          <p className="p-time">{time.seconds}</p>
          <p className="p-time1">Seconds</p>
        </div>
      </div>
      <div className="btnn">
        <button className="btn-time" type="button">
          Access Trail Course
        </button>
      </div>
      <div className="trail-gets">
        <h1 className="gets-h">What You Will Recieve with Trail : </h1>

        <div className="box-trail1">
          <div className="check">
            <input type="checkbox" className="cb" />
            <p className="over-p">
              Overview of The
              <strong className="olp"> "OLP" Strategy </strong> - Optimized
              Learning Path Where We Share Step By Step Plan TO Crack the 700 +
              GMAT Score
            </p>
          </div>

          <div className="check">
            <input type="checkbox" className="cb" />
            <p className="over-q">
              Real-Time Application Examples of
              <strong className="olp"> "APS Techniques </strong> - Approach +
              Pattern + Strategy GMAT Score
            </p>
          </div>
          <div className="check">
            <input type="checkbox" className="cb" />
            <p className="over-r">
              Overview of The
              <strong className="olp"> Downloadable Resourcess & </strong>{" "}
              CheatSheet + Playbooks to accelerate Your GMAT Prep Learning Curve
            </p>
          </div>
        </div>
      </div>
      <p className="para-dont">Don't Miss Out! Access Trail Below</p>
      <div className="btn-A">
        <button type="button" className="bt-green">
          ACCESS TRAIL
        </button>
      </div>
    </div>
  );
}

export default FreeTrial;
