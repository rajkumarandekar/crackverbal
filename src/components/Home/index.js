
import React, { useEffect } from "react";
import "./index.css";

function Home() {
  useEffect(() => {

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateStars() {
      const container = document.querySelector(".h-head-container");

      if (container) {
        for (let i = 0; i < 24; i++) {
          const star = document.createElement("span");
          star.textContent = "★";
          star.className = "sparkling-star random-star";

          const randomTop = getRandomInt(0, container.clientHeight);
          const randomLeft = getRandomInt(0, container.clientWidth);

          star.style.top = `${randomTop}px`;
          star.style.left = `${randomLeft}px`;

          container.appendChild(star);
        }
      }
    }

    
    generateStars();
  }, []);

  return (
    <div className="h-main">
      <div className="h-main2">
        <div className="h-head-container">
          <h1 className="h-head">
            "CRACK THE GMAT" PREPARATION LIVE ONLINE COURSE 2021"
          </h1>
        </div>

        <p className="h-para">
          " Access <span className="span-h">FREE</span> Trial Where We Reveal
          Effective Techniques To Crack The
          <span className="span-h"> 700+ GMAT Score</span> in 60 days"
        </p>
        <div className="buttons-h">
          <button className="Get-btn">Get Started</button>
          <button className="Get-btn1">Learn More</button>
        </div>
      </div>

      <div className="video1">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/f8C9LD66BSo?si=SwO_lDhWZejPdFHu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
