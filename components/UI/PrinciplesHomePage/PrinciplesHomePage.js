import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import cls from "./PrinciplesHomePage.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useWidth } from "../../../utils/useWidth";

export default function PrinciplesHomePage() {
  const { t } = useTranslation("common");
  const width = useState(useWidth());
  const router = useRouter();

  return (
    <div className={cls.root}>
      <div className={cls.image}>
        <Container>
          <img src="/images/principles.jpg" alt="image" />
          <Box className={cls.box}>
            <Typography
              className={`${cls.title} `}
              dangerouslySetInnerHTML={{ __html: t("reports page title") }}
            ></Typography>
          </Box>
        </Container>
      </div>
      <Box className={cls.row}>
        <Container>
        <div className={cls.video}>
              <Typography Typography className={cls.titleVideo}>
                {t("Muhammad Ayubxon domlaning IMAN Invest halolligi haqida fikrlari")}  
              </Typography>
              <div className={cls.videoWrapper}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MZAUofPKUp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <div className={cls.text}>
                <Typography className={cls.titleContent}>
                  {t("principles doctor Ziyaad")}
                </Typography>
                <Typography className={cls.contentBio}>
                  {t("head_of_sharia_board")}
                </Typography>
                <Typography className={cls.content}>
                  {t("dr_ziyad_text")}
                </Typography>
                <Typography className={cls.info}>
                  {t("dr_ziyad_job")}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img src="/images/doctor.jpg" alt="Doctor Ziyaad Mohammad" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={cls.certificate}>
        <Container>
          <div className={cls.certificateContent}>
            <Typography className={cls.childTitle}>
              {t("principles sertificate title")}
            </Typography>
            <Typography
              className={cls.childContent}
              dangerouslySetInnerHTML={{
                __html: t("principles sertificate text"),
              }}
            ></Typography>
            <div className={cls.fatwaSection}>
              <div className={cls.fatwa}>
                <img
                  className={cls.fatwaImg}
                  src={`/images/${router.locale}fatwa.png`}
                  alt="certificate"
                />
              </div>
              <div className={cls.fatwa}>
                <img
                  className={cls.fatwaImg2}
                  src={`/images/${router.locale}fatwa2.png`}
                  alt="certificate"
                />
              </div>
            </div>
            {/* <img
              className={cls.fatwaRes}
              src={`/images/resfatwa${router.locale}.png`}
              alt="certificate"
            /> */}
          </div>
        </Container>
      </Box>
    </div>
  );
}
