import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./SecondRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LinkAppStore =
  "https://apps.apple.com/us/app/iman-investor/id1572636618  ";
const LinkGooglePlay =
  "https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US";

function SecondRow() {
  const { t } = useTranslation("common");

  return (
    <div id="registration">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <h2>{t("how_work_row_2_title")}</h2>
                <p>{t("how_work_row_2_descr")}</p>
                <div className={cls.buttons}>
                  <a href={LinkAppStore} target="_blank">
                    <img src="images/how/ios.svg" alt="ios" />
                  </a>
                  <a href={LinkGooglePlay} target="_blank">
                    <img src="images/how/android.svg" alt="android" />
                  </a>
                </div>
              </div>
              <div className={cls.card2}>
                <img src="images/how/row2m.svg" alt="mobile" />
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
      <Fade center>
        <Container>
          <div className={cls.mobile}>
            <h3>{t("how_work_row_2_title")}</h3>
            <div className={cls.cardMobile}>
              <img src="images/how/mobile/row2m.svg" alt="mobile" />
            </div>
            <p>{t("how_work_row_2_descr")}</p>
          </div>
        </Container>
      </Fade>
    </div>
  );
}

export default trackWindowScroll(SecondRow);
