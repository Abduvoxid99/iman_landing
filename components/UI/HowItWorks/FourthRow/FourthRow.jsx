import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./FourthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

export default function FourthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="verification">
      <div className={cls.root}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <h2>{t("how_work_row_4_title")}</h2>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: t("how_work_row_4_descr"),
                  }}
                ></p>
              </div>
              <div className={cls.card2}>
                <VideoPlayer source="https://www.youtube.com/embed/ebKKBAJqGIM" />
              </div>
            </Box>
            <Box className={cls.row}>
              <div className={cls.content1}>
                <img src="images/how/icons/num1.svg" alt="num1" />
                <p>{t("how_work_row_4_descr_step1")}</p>
              </div>
              <div className={cls.content2}>
                <img src="images/how/icons/num2.svg" alt="num2" />
                <p>{t("how_work_row_4_descr_step2")}</p>
              </div>
              <div className={cls.content1}>
                <img src="images/how/icons/num3.svg" alt="num3" />
                <p>{t("how_work_row_4_descr_step3")}</p>
              </div>
              <div className={cls.content2}>
                <img src="images/how/icons/num4.svg" alt="num4" />
                <p>{t("how_work_row_4_descr_step4")}</p>
              </div>
            </Box>
            <div className={cls.mobileCard}>
              <VideoPlayer source="https://www.youtube.com/embed/ebKKBAJqGIM" />
            </div>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
