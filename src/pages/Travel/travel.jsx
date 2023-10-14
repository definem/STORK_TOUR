// Bismillah
import React from "react";
import CardImg from "../../assets/images/cardImg.webp";
import LeftArrow from "../../assets/icons/arrowLeft.svg"
import RightArrow from "../../assets/icons/arrowRight.svg";

const Travel = () => {
  return (
    <>
      <div className="container">
        <div className="mb-[110px]">
          <div className="flex items-center justify-between">
            <h1 className="mb-[80px] text-[48px] font-semibold">
              Популярные направления
            </h1>
            <div className="flex gap-[18px]">
              <img src={LeftArrow} alt="left arrow icon" />
              <img src={RightArrow} alt="right arrow icon" />
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div
              style={{
                backgroundImage: `url(${CardImg})`,
                width: "460px",
                height: "300px",
                zIndex: "0",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${CardImg})`,
                width: "460px",
                height: "300px",
                zIndex: "0",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${CardImg})`,
                width: "460px",
                height: "300px",
                zIndex: "0",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
