import BackgroundImage from "../../assets/images/bg.webp";
import Slider from "../../components/UI/Carousel";

const Main = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          width: "100vw",
          height: "100vh",
          zIndex: "0",
        }}
      ></div>
    </>
  );
};

export default Main;
