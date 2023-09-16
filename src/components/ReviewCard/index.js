import React from "react";
import "./index.css";

const ReviewCard = ({ data }) => {
  return (
    <div className="column">
      <div className="card mb-4 box-card">
        <div className="box-1">
          <div className="box1">
            <div className="box-items">
              <img src={data.imgSrc} alt="img-cons" className="img-icon" />
              <div className="conr">
                <p className="name-h">{data.name}</p>
                <p className="para-h">{data.username}</p>
              </div>
              <h2 className="p-name">
                <img src={data.logoSrc} className="o" alt="d" />
              </h2>
            </div>
            <div className="stars">
              {Array.from({ length: data.rating }, (_, index) => (
                <span
                  key={index}
                  className="fa fa-star checked"
                  style={{ fontSize: "22px" }}
                ></span>
              ))}
            </div>
            <p className="para0">{data.review}</p>
            <p className="para-d">{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
