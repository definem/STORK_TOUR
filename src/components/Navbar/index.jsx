import React from "react";
import { useEffect, useState } from "react";
import { Button, Avatar, Popover, Segmented } from "antd";
import { useTranslation } from "react-i18next";
import UzbFlag from "../../assets/images/uzb.png";
import UsaFlag from "../../assets/images/usa.png";
import RusFlag from "../../assets/images/rus.png";
import TurkFlag from "../../assets/images/turk.png";
import ArabFlag from "../../assets/images/arab.png";

import i18next from "../../../i18n";

const Navbar = () => {
  const [color, setColor] = useState("false");

  const changeColor = () => {
    if (window.scrollY < 900) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const { t } = useTranslation();

  const changeLang = (e) => {
    i18next.changeLanguage(e, (error, t) => {
      console.log(error);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-[100%] z-index-[10]">
        <div className="container">
          <div className="flex items-center justify-between pt-[30px]">
            <p className="text-white font-bold">STOCK TOUR</p>
            <div className="flex items-center justify-between gap-[50px] text-[18px] text-white font-medium">
              <p className="hoverMe">{t("navbar.item1")}</p>
              <p className="hoverMe">{t("navbar.item2")}</p>
              <p className="hoverMe">{t("navbar.item3")}</p>
              <p className="hoverMe">{t("navbar.item4")}</p>
            </div>
            <Popover
              content={
                <div>
                  <>
                    <Segmented
                      onChange={(e) => changeLang(e)}
                      options={[
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src={UzbFlag} />
                              <div>Uzb</div>
                            </div>
                          ),
                          value: "uz",
                        },
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src={UsaFlag} />
                              <div>Eng</div>
                            </div>
                          ),
                          value: "en",
                        },
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src={RusFlag} />
                              <div>Ru</div>
                            </div>
                          ),
                          value: "ru",
                        },
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src={TurkFlag} />
                              <div>Tr</div>
                            </div>
                          ),
                          value: "tr",
                        },
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src={ArabFlag} />
                              <div>Ara</div>
                            </div>
                          ),
                          value: "ar",
                        },
                      ]}
                    />
                  </>
                </div>
              }
              title="Change language"
              trigger="click"
            >
              <Button className="text-white">language</Button>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
