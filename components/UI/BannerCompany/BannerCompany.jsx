import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./BannerCompany.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export default function BannerCompany() {
  const { t } = useTranslation("common");

  return (
    <div id="our-mission">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.left}>
                <h2 className="g-title">{t("our_mission_title")}</h2>
                <p className="g-desc">{t("our_mission_descr")}</p>
              </div>
              <div className={cls.right}>
                <img src="images/company/banner1.svg" alt="banner" />
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
      <Fade center>
        <div className={cls.mobile}>
          <h3 className="g-title">{t("our_mission_title")}</h3>
          <p className="g-desc">{t("our_mission_descr")}</p>
          <img
            className={cls.mobileImg}
            src="images/company/banner2.svg"
            alt="banner"
          />
        </div>
      </Fade>
    </div>
  );
}
