import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./SeventhRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function SeventhRow() {
  const { t } = useTranslation("common");

  return (
    <div id="sale">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.content}>
                <h2 className="g-title">{t("how_work_row_7_title")}</h2>
                <p className="g-desc">{t("how_work_row_7_descr")}</p>
              </div>
              <div className={cls.steps}>
                <div className={cls.step}>
                  <img src="images/how/icons/num1.svg" alt="nasenki1" />
                  <p>{t("how_work_row_7_step_1")}</p>
                </div>
                <div className={cls.step}>
                  <img src="images/how/icons/num2.svg" alt="nasenki2" />
                  <p>{t("how_work_row_7_step_2")}</p>
                </div>
                <div className={cls.step}>
                  <img src="images/how/icons/num3.svg" alt="nasenki3" />
                  <p>{t("how_work_row_7_step_3")}</p>
                </div>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
