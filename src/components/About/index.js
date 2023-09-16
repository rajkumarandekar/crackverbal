import React, { useState, useEffect } from "react";
import "./index.css";

function About() {
  const [currentOwner, setCurrentOwner] = useState(0); // Index of the current owner
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const owners = [
    {
      name: "Arun Jagannathan",
      role: "Co-Founder CEO | Crackverbal | GMAT Verbal & MBA Coach",
      imgSrc:
        "https://storage.googleapis.com/colorize_done/035f600f1689522220732ec86b8db191/ada5b5232d7088c5ed0789f2aa723f97.jpg",

      description:
        "Arun has trained and mentored over 30K students for the GMAT, GRE, and applications in the past 12 years. Arun has personally designed the Crackverbal GMAT curriculum from the ground up to include every feature he saw as missing in traditional courses and has also devised all-new techniques to help out students. He is an active and well-respected member on popular online GMAT forums such as Pagalguy.com (member since 2003, and one of the official MBA consultants), beatthegmat.com, and gmatclub.com. His students have made it into top B-Schools such as INSEAD, Wharton, Harvard, Stanford, and ISB to name a few.",
    },
    {
      name: "Shree",
      role: "Co-Founder COO | Crackverbal | MBA Admissions Coach",
      imgSrc:
        "https://storage.googleapis.com/colorize_done/035f600f1689522220732ec86b8db191/da77e3aa8b7027f90f938614fee24b16.jpg",
      description:
        "Arun has trained and mentored over 30K students for the GMAT, GRE, and applications in the past 12 years. Arun has personally designed the Crackverbal GMAT curriculum from the ground up to include every feature he saw as missing in traditional courses and has also devised all-new techniques to help out students. He is an active and well-respected member on popular online GMAT forums such as Pagalguy.com (member since 2003, and one of the official MBA consultants), beatthegmat.com, and gmatclub.com. His students have made it into top B-Schools such as INSEAD, Wharton, Harvard, Stanford, and ISB to name a few.",
    },
  ];

  useEffect(() => {
    // Automatically switch to the next owner after 5 seconds
    const timer = setInterval(() => {
      setCurrentOwner((prevOwner) => (prevOwner === 0 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="about-main" id="about">
      <div className="owners">
        <a href="#about" className="about-a">
          About Us
        </a>

        <p className="about-p">
          Crackverbal is composed of a diverse team of members united by the
          mission to build a world-class test-prep and admissions company to
          help students make smarter career choices.
        </p>
        <div className="about-co">
          {owners.map((owner, index) => (
            <div
              key={index}
              className={` arun-card ${
                currentOwner === index ? "active-owner" : "inactive-owner"
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)} 
            >
              <div className="card-content relative">
                <img src={owner.imgSrc} alt={`img${index}`} className="a-img" />
                <h1 className="a-head">{owner.name}</h1>
                <p className="a-para">{owner.role}</p>
                {isHovered === index && (
                  <div className="hover-content full-screen">
                    <p className="description">{owner.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
