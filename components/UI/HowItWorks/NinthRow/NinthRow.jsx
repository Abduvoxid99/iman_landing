import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./NinthRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function NinthRow() {
  const { t } = useTranslation("common");

  return (
    <div id="payouts">
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <h2>{t("how_work_row_9_title")}</h2>
                <p>{t("how_work_row_descr")}</p>
              </div>
              <div className={cls.card2}>
                <img src="images/how/diagram.svg" alt="diagram" />
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
