// Bismillah
import React from 'react';
import AtpTour from "../../assets/icons/AtpTour.svg";
import InfinityTravel from "../../assets/icons/infinityTravel.svg";
import TravelOrigon from "../../assets/icons/travelOrigon.svg";
import Rtravel from "../../assets/icons/rtrave.svg";
import Traveloka from "../../assets/icons/traveloka.svg";
import BackgroundImage2 from "../../assets/images/bg2.webp";


const About = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-[85px] mt-[80px] mb-[80px]">
          <img src={AtpTour} alt="" />
          <img src={InfinityTravel} alt="" />
          <img src={TravelOrigon} alt="" />
          <img src={Rtravel} alt="" />
          <img src={Traveloka} alt="" />
        </div>
      </div>
      <div
        className="container rounded-[15px] overflow-hidden bg-red-500"
        style={{
          marginBottom: "80px",
          backgroundImage: `url(${BackgroundImage2})`,
          width: "1240px",
          height: "500px",
          zIndex: "0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </>
  );
};

export default About;