import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./EighthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function EighthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="markups">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.content}>
                <h2 className="g-title">{t("how_work_row_8_title")}</h2>
                <p className="g-desc">{t("how_work_row_8_subtitle")}</p>
              </div>
              <div className={cls.steps}>
                <div className={cls.step}>
                  <img src="images/how/icons/nasenki1.svg" alt="nasenki1" />
                  <h3>{t("how_work_row_8_step_1")}</h3>
                </div>
                <div className={cls.step}>
                  <img src="images/how/icons/nasenki2.svg" alt="nasenki2" />
                  <h3>{t("how_work_row_8_step_2")}</h3>
                </div>
                <div className={cls.step}>
                  <img src="images/how/icons/nasenki3.svg" alt="nasenki3" />
                  <h3>{t("how_work_row_8_step_3")}</h3>
                </div>
              </div>
              <p className={cls.description}>{t("how_work_row_8_descr")}</p>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
