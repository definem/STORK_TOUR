// Bismillah
import React from "react";
import CardImg2 from "../../assets/images/cardImg2.webp";

const Reviews = () => {
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
              Популярные направления
            </h1>
            <p className="text-[16px] font-semibold max-w-[649px]">
              В нашей стране много зон отдыха, турбаз, природных баз с целебным
              воздухом, большое внимание уделено озёрам и рек. Вас удивит
              широкий спектр размещения в Узбекистане – гостиницы, частные
              пансионы, бутик-отели, хостелы, студенческие городки, здесь вы
              можете выбрать самую доступную цену.
            </p>
            <div className="flex gap-[80px] mt-[59px]">
              <div>
                <p className="text-[22px] text-[#0154A7]">3323+ (на пример)</p>
                <p className="16px font-semibold">Счастливые путешественники</p>
              </div>
              <div>
                <p className="text-[22px] text-[#0154A7]">3323+ (на пример)</p>
                <p className="16px font-semibold">Маршруты созданы</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[48px] text-[#0154A7]">
          Развлекательная программа
        </h1>
        <p className="text-[18px] text-[#1E1E1E] max-w-[649px]">
          Узбекистан предлагает не только экскурсии к историческим архитектурным
          памятникам, но и места, где можно весело провести время с семьей и
          друзьями.
        </p>
      </div>
    </>
  );
};

export default Reviews;
