import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./BannerSharia.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";

export default function BannerSharia() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.left}>
                <h2 className="g-title">{t("sharia_banner_title")}</h2>
                <p className="g-desc">{t("sharia_banner_descr")}</p>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
    </>
  );
}
