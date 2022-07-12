import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./HowToNameBlock.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function FifthRow() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <Box className={cls.row}>
            <div className={cls.card1}>
              <VideoPlayer source="https://www.youtube.com/embed/5j2jDGUUWMo" />
            </div>
            <div className={cls.card2}>
              <h2 className="g-title">{t("sharia_row_2_title")}</h2>
              <p className="g-desc">{t("sharia_row_2_descr")}</p>
            </div>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
