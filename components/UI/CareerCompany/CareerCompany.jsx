import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./CareerCompany.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function CareerCompany() {
  const { t } = useTranslation("common");

  return (
    <div id="career">
      <div className={cls.root}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.card1}>
                <h2 className="g-title">{t("career title")}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: t("career text") }}
                  className="g-desc"
                ></p>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </div>
  );
}
