// Bismillah
import React from "react";
import Speed from "../../assets/icons/airplane.svg";
import Privacy from "../../assets/icons/check.svg";
import Like from "../../assets/icons/like.svg";
import CardImg2 from "../../assets/images/cardImg2.webp";
import LeftArrow from "../../assets/icons/arrowLeft.svg";
import RightArrow from "../../assets/icons/arrowRight.svg";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="items-center mt-[120px]">
          <h1 className="text-[34px] text-[#0154A7]">Что Вас ожидает?</h1>
          <p className="mt-[20px] mb-[70px]">
            Наша команда работает только для Вас!
          </p>
        </div>
        <div className="flex gap-[241px] ">
          <div className="items-center justify-between">
            <img src={Speed} alt="Speed icon" />
            <p className="mt-[20px]">Скорость</p>
          </div>
          <div className="items-center justify-between">
            <img src={Privacy} alt="Privacy icon" />
            <p className="mt-[20px]">Безопасность</p>
          </div>
          <div className="items-center justify-between">
            <img src={Like} alt="Like icon" />
            <p className="mt-[20px]">Комфорт и Удобство</p>
          </div>
        </div>
        <div className="mb-[110px] mt-[145px]">
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
                backgroundImage: `url(${CardImg2})`,
                width: "460px",
                height: "300px",
                zIndex: "0",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${CardImg2})`,
                width: "460px",
                height: "300px",
                zIndex: "0",
                backgroundSize: "cover",
                borderRadius: "15px",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${CardImg2})`,
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

export default Contact;
