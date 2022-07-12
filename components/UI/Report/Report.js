import { Container, Typography } from "@material-ui/core";
import React from "react";
import cls from "./Report.module.scss";
import { useTranslation, i18n } from "next-i18next";

export default function Report() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container>
        <div className={cls.wrapper}>
          <div className={cls.content}>
            <Typography className={cls.text}>
              {t("quarterly report - Q1 2022")}
            </Typography>
            <a
              href="https://drive.google.com/file/d/1o_xedwpmjEgTMgWux90xN8ovqPsBv2EW/view"
              rel="noopener noreferrer"
              className={cls.imgPdf}
              alt="alt text"
              target="_blank"
            >
              <img src="/images/pdf.png" alt="" />
            </a>
          </div>
        </div>
        <div className={cls.wrapper}>
          <div className={cls.content}>
            <Typography className={cls.text}>
              {t("annual report - 2021")}
            </Typography>
            <a
              href="https://drive.google.com/file/d/1m2Xr4XISuhG-KaKKOlisImzVYJFTZrcq/view?usp=sharing"
              rel="noopener noreferrer"
              className={cls.imgPdf}
              alt="alt text"
              target="_blank"
            >
              <img src="/images/pdf.png" alt="" />
            </a>
          </div>
          <div className={cls.video}>
            <Typography Typography className={cls.text}>
              {t("a brief overview of the presentation of the annual report")}
            </Typography>
            <div className={cls.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ya4tqs86ujA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
