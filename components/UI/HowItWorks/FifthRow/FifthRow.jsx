import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./FifthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

export default function FifthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="investing">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <VideoPlayer source="https://www.youtube.com/embed/5j2jDGUUWMo" />
              </div>
              <div className={cls.card2}>
                <h2>{t("how_work_row_5_title")}</h2>
                <p className={cls.description}>
                  {t("how_work_row_5_sub_title")}
                </p>
                <p className={cls.subDescr}>{t("how_work_descr5")}</p>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
