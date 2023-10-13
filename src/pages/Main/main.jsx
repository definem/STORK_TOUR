import BackgroundImage from "../../assets/images/bg.webp";

const Main = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default Main;
