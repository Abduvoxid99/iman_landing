import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./SixthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function SixthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="partners">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <h2>{t("how_work_row_6_title")}</h2>
                <p>{t("how_work_row_6_descr")}</p>
                <img
                  className={cls.brands}
                  src="images/how/brands.svg"
                  alt="brands"
                />
              </div>
              <div className={cls.card2}>
                <h3>{t("partners_300")}</h3>
                <p>{t("all_uzb")}</p>
                <img width="100%" src="images/how/uzb.svg" alt="uzb" />
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
      <Fade center>
        <Container>
          <div className={cls.mobile}>
            <h3>{t("how_work_row_6_title")}</h3>

            <div className={cls.bgImg}>
              <p>{t("how_work_row_6_descr")}</p>
              <img
                className={cls.brandMobile}
                width="100%"
                src="images/how/mobile/brands.svg"
                alt="brands"
              />
            </div>
          </div>
        </Container>
      </Fade>
    </div>
  );
}
