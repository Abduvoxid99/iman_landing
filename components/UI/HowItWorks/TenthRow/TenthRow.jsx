import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./TenthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function TenthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="risks">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <img
                  className={cls.firstImg}
                  src="images/how/education.svg"
                  alt="mobile"
                />
              </div>
              <div className={cls.card2}>
                <div className={cls.content}>
                  <h2>{t("how_work_row_10_title")}</h2>
                  <div className={cls.secondImg}>
                    <img
                      className={cls.mobileImg}
                      src="images/how/mobile/mudaraba.svg"
                      alt="mobile"
                    />
                  </div>
                  <p>{t("how_work_row_10_descr_1")}</p>
                  <p>{t("how_work_row_10_descr_2")}</p>
                  <p>{t("how_work_row_10_descr_3")}</p>
                  <h4 className={cls.four}>{t("how_work_row_10_descr_4")}</h4>
                  <p>{t("how_work_row_10_descr_5")}</p>
                  <h4 className={cls.six}>{t("how_work_row_10_descr_6")}</h4>
                  <p>{t("how_work_row_10_descr_7")}</p>
                  <p>{t("how_work_row_10_descr_8")}</p>
                  <p>{t("how_work_row_10_descr_9")}</p>
                </div>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
