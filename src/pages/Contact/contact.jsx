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
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="mt-[120px]">
          <h1 className="text-center text-[34px] text-[#0154A7]">
            {t("service.title")}
          </h1>
          <p className="text-center text-[18px] text-[#1E1E1E] mt-[20px]">
            {t("service.desc")}
          </p>
        </div>

        <div className="flex gap-x-[230px] items-center justify-center mt-[75px]">
          <div className="flex flex-col items-center justify-center gap-[31px]">
            <img className="" src={Speed} alt="Speed icon" />
            <p className="">{t("service.item1")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[31px]">
            <img src={Privacy} alt="Privacy icon" />
            <p className="">{t("service.item2")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[31px]">
            <img src={Like} alt="Like icon" />
            <p className="">{t("service.item3")}</p>
          </div>
        </div>

        <div className="mb-[110px] mt-[145px]">
          <div className="flex items-center justify-between mb-[80px] ">
            <h1 className="text-[48px] font-semibold">
              {t("suggestionTitle")}
            </h1>
            <div className="flex gap-[18px]">
              <img src={LeftArrow} alt="left arrow icon" />
              <img src={RightArrow} alt="right arrow icon" />
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="hover-img"
                src={CardImg2}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 32,
                  left: 30,
                  color: "#FFF",
                  maxWidth: "297px",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Хорезм – загадочный край
              </p>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="hover-img"
                src={CardImg2}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 32,
                  left: 30,
                  color: "#FFF",
                  maxWidth: "297px",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Хорезм – загадочный край
              </p>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="hover-img"
                src={CardImg2}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 32,
                  left: 30,
                  color: "#FFF",
                  maxWidth: "297px",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Хорезм – загадочный край
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-[100px]">
          <ul>
            <li>
              <h1 className="text-[#0154A7] text-[20px] font-semibold">
                STORK TOUR
              </h1>
            </li>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">
              {t("footer.glavnaya")}
            </li>
            <li className="text-[18px] mt-[15px] hoverMee hover:text-[#0154A7]">
              {t("footer.item1")}
            </li>
            <li className="text-[18px] mt-[15px] hoverMee hover:text-[#0154A7]">
              {t("footer.item2")}
            </li>
            <li className="text-[18px] mt-[15px] hoverMee hover:text-[#0154A7]">
              {t("footer.item3")}
            </li>
            <li className="text-[18px] mt-[15px] hoverMee hover:text-[#0154A7]">
              {t("footer.item4")}
            </li>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">
              {t("footer.contact")}
            </li>
            <div className="flex gap-[10px] mt-[15px] hoverMee hover:text-[#0154A7]">
              <img src={Location} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                {t("footer.address")}
              </span>
              <p className="text-[18px]">Company adress</p>
            </div>
            <div className="flex gap-[10px] mt-[15px] hoverMee hover:text-[#0154A7]">
              <img src={Headphone} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                {t("footer.phone")}
              </span>
              <a href="tel:+998 90 123 45 67" className="text-[18px]">
                +998 90 123 45 67
              </a>
            </div>
            <div className="flex gap-[10px] mt-[15px] hoverMee hover:text-[#0154A7]">
              <img src={Mail} alt="" />
              <span className="text-[18px] text-[#1E1E1E] font-semibold">
                {t("footer.mail")}
              </span>
              <p className="text-[18px]">companymail@gmail.com</p>
            </div>
          </ul>
          <ul>
            <li className="pb-[12px] text-[18px] font-semibold">
              {t("footer.social")}
            </li>
            <div className="flex gap-[10px]">
              <img src={Twitter} alt="" title="Twitter" />
              <img src={Facebook} alt="" title="Facebook" />
              <img src={YouTube} alt="" title="YouTube" />
              <img src={Instagram} alt="" title="Instagram" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
