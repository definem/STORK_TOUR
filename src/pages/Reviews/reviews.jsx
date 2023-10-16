// Bismillah
import React from "react";
import CardImg2 from "../../assets/images/cardImg2.webp";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="flex gap-[60px] items-center mb-[110px]">
          <div
            style={{
              backgroundImage: `url(${CardImg2})`,
              width: "450px",
              height: "400px",
              zIndex: "0",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
          <div>
            <h1 className="text-[34px] text-[#0154A7] font-semibold">
              {t("popular.title")}
            </h1>
            <p className="text-[16px] font-semibold max-w-[649px]">
              {t("popular.desc")}
            </p>
            <div className="flex gap-[80px] mt-[59px]">
              <div>
                <p className="text-[22px] text-[#0154A7]">
                  {t("popular.naPrimer")}
                </p>
                <p className="16px font-semibold">{t("popular.naPrimer1")}</p>
              </div>
              <div>
                <p className="text-[22px] text-[#0154A7]">
                  {t("popular.naPrimer")}
                </p>
                <p className="16px font-semibold">{t("popular.naPrimer2")}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[48px] text-[#0154A7]">
          {t("razvlekatelnaya.title")}
        </h1>
        <p className="text-[18px] text-[#1E1E1E] max-w-[649px]">
          {t("razvlekatelnaya.subtitle")}
        </p>
      </div>
    </>
  );
};

export default Reviews;
