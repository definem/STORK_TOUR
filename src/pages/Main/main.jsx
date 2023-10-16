import BackgroundImage from "../../assets/images/bg.webp";
import { useTranslation } from "react-i18next";


const Main = () => {
  const { t } = useTranslation();
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
      >
        <div className="container">
          <h2
            style={{ paddingTop: "324px" }}
            className="text-[64px] text-white text-bold max-w-[580px]"
          >
            {t("hero.title")}
          </h2>
          <h4 className="text-[24px] text-white font-normal w-[352px] h-[53px]">
            {t("hero.subtitle")}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Main;
