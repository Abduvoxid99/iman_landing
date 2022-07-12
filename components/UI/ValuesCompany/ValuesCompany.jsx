import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./ValuesCompany.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function ValuesCompany() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root} id="valuation">
      <Container className={cls.container}>
        <Fade center>
          <h2 className="g-title">{t("value_title")}</h2>
          <Box className={cls.row}>
            <div className={cls.card}>
              <p className={cls.title}>{t("value_step_title_1")}</p>
              <p className="g-desc">{t("value_step_descr_1")}</p>
            </div>
            <div className={cls.card}>
              <p className={cls.title}>{t("value_step_title_2")}</p>
              <p className="g-desc">{t("value_step_descr_2")}</p>
            </div>
            <div className={cls.card}>
              <p className={cls.title}>{t("value_step_title_3")}</p>
              <p className="g-desc">{t("value_step_descr_3")}</p>
            </div>
            <div className={cls.card}>
              <p className={cls.title}>{t("value_step_title_4")}</p>
              <p className="g-desc">{t("value_step_descr_4")}</p>
            </div>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
