// Bismillah
import React from "react";
import Speed from "../../assets/icons/airplane.svg";
import Privacy from "../../assets/icons/check.svg";
import Like from "../../assets/icons/like.svg";
import CardImg2 from "../../assets/images/cardImg2.webp";
import LeftArrow from "../../assets/icons/arrowLeft.svg";
import RightArrow from "../../assets/icons/arrowRight.svg";

import Location from "../../assets/icons/footerLocation.svg";
import Headphone from "../../assets/icons/footerHeadphone.svg";
import Mail from "../../assets/icons/footerMail.svg";
import Twitter from "../../assets/icons/Socials/twitter.svg";
import Facebook from "../../assets/icons/Socials/facebook.svg";
import YouTube from "../../assets/icons/Socials/youtube.svg";
import Instagram from "../../assets/icons/Socials/instagram.svg";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="items-center mt-[120px] justify-center flex">
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
              Мы предлагаем все виды туризма
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
        <div className="flex justify-between mb-[127px]">
          <ul>
            <li>
              <h1 className="text-[#0154A7] text-[20px] font-semibold">
                STORK TOUR
              </h1>
            </li>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">Главная</li>
            <li className="text-[18px] mt-[15px]">О компании</li>
            <li className="text-[18px] mt-[15px]">Путешествия</li>
            <li className="text-[18px] mt-[15px]">Отзывы</li>
            <li className="text-[18px] mt-[15px]">Контакты</li>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">
              Контактные данные
            </li>
            <div className="flex gap-[10px] mt-[15px]">
              <img src={Location} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                Адрес:
              </span>
              <p className="text-[18px]">Company adress</p>
            </div>
            <div className="flex gap-[10px] mt-[15px]">
              <img src={Headphone} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                Телефон номер:
              </span>
              <a href="tel:+998 90 123 45 67" className="text-[18px]">
                +998 90 123 45 67
              </a>
            </div>
            <div className="flex gap-[10px] mt-[15px]">
              <img src={Mail} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                Эл.почта:
              </span>
              <p className="text-[18px]">companymail@gmail.com</p>
            </div>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">
              Социальные сети
            </li>
            <div className="flex gap-[10px]">
              <img src={Twitter} alt="" />
              <img src={Facebook} alt="" />
              <img src={YouTube} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
