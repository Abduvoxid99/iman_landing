import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./EleventhRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function EleventhRow() {
  const { t } = useTranslation("common");

  return (
    <div id="profit">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card2}>
                <div className={cls.content}>
                  <h2 className="g-title">{t("how_work_row_11_title")}</h2>
                  <p className="g-desc">{t("how_work_row_11_descr_1")}</p>
                  <p className="g-desc">{t("how_work_row_11_descr_2")}</p>
                  <img
                    className={cls.mobileImg}
                    src="images/how/mobile/mobile6.svg"
                    alt="mobile"
                  />
                </div>
              </div>
              <div className={cls.card1}>
                <img src="images/how/profit.svg" alt="mobile" />
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
