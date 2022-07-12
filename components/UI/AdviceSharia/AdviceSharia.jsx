import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./AdviceSharia.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function AdviceSharia() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <Box className={cls.row}>
            <div className={cls.card2}>
              <div className={cls.content}>
                <h2 className="g-title">{t("sharia_row_3_title")}</h2>
                <img
                  className={cls.mobileImg}
                  src="images/sharia/doktor.svg"
                  alt="mobile"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("sharia_row_3_descr_1"),
                  }}
                  className="g-desc"
                ></p>
                <p className="g-desc">{t("sharia_row_3_descr_2")}</p>
                <p className="g-desc">{t("sharia_row_3_descr_3")}</p>
                <p className="g-desc">{t("sharia_row_3_descr_4")}</p>
              </div>
            </div>
            <div className={cls.card1}>
              <img src="images/sharia/doktor.svg" alt="mobile" />
            </div>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
