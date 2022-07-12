import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./LastRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

export default function NinthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="profit_withdrawal">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.col1}>
                <div className={cls.card1}>
                  <VideoPlayer source="https://www.youtube.com/embed/yDPmPmP-r0U" />
                </div>
                <div className={cls.card2}>
                  <h2>{t("how_work_row_12_title")}</h2>
                  <p>{t("how_work_row_12_descr")}</p>
                  <p className={cls.subDescr}>
                    {t("how_work_row_12_subdescr")}
                  </p>
                </div>
              </div>
              <div className={cls.col2} id="reinvestment">
                <div className={cls.card1}>
                  <h2>{t("how_work_row_13_title")}</h2>
                  <p>{t("how_work_row_13_descr")}</p>
                </div>
                <div className={cls.card2}>
                  <VideoPlayer source="https://www.youtube.com/embed/qvMy_8SGReQ" />
                </div>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
