import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./ThirdRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function ThirdRow() {
  const { t } = useTranslation("common");

  return (
    <div id="aims">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <img src="images/how/row3m.svg" alt="mobile" />
              </div>
              <div className={cls.card2}>
                <h2>{t("how_work_row_3_title")}</h2>
                <p className={cls.description}>{t("how_work_row_3_descr")}</p>
                <p className={cls.subDescr}>{t("how_work_row_3_sub_descr")}</p>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
      <Fade center>
        <div className={cls.mobile}>
          <h3>{t("how_work_row_3_title")}</h3>
          <p className={cls.mobileDescr}>{t("how_work_row_2_descr")}</p>
          <img src="images/how/mobile/mobile4.svg" alt="mobile" />
          <p className={cls.mobileSubDescr}>{t("how_work_row_3_sub_descr")}</p>
        </div>
      </Fade>
    </div>
  );
}
