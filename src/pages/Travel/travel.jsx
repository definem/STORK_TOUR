// Bismillah
import React from "react";
import CardImg from "../../assets/images/cardImg.webp";
import LeftArrow from "../../assets/icons/arrowLeft.svg";
import RightArrow from "../../assets/icons/arrowRight.svg";
import { useTranslation } from "react-i18next";

const Travel = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="mb-[110px]">
          <div className="flex items-center justify-between mb-[80px]">
            <h1 className=" text-[48px] font-semibold">{t("popularTitle")}</h1>
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
