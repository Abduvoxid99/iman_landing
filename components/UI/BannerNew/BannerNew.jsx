import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { ArrowIcon, ClickHereIcon } from "../Icons";
import cls from "./BannerNew.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import MobileBanner from "./Mobile/MobileBanner";

export default function BannerNew() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <Box className={cls.row}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} className={cls.left}>
                <div className={cls.wrapperLeftContent}>
                  <Typography className={cls.title}>
                    {t("banner_title")}
                  </Typography>
                  <Typography className={cls.subtitle}>
                    {t("banner_subtitle")}
                  </Typography>
                  <Typography className={cls.description}>
                    {t("banner_description")}
                  </Typography>
                </div>

                <Box className={cls.statistic}>
                  <div className={cls.statisticCard}>
                    <div className={cls.wrapperContent}>
                      <p className={cls.statisticTitle}>
                        {t("count_downloaded_1")}
                      </p>
                      <p
                        dangerouslySetInnerHTML={{ __html: t("download_app") }}
                        className={cls.statisticDescription}
                      ></p>
                    </div>
                  </div>
                  <div className={cls.statisticCard}>
                    <div className={cls.wrapperContent}>
                      <p className={cls.statisticTitle}>
                        {t("count_downloaded_2")}
                      </p>
                      <p
                        dangerouslySetInnerHTML={{ __html: t("users_us") }}
                        className={cls.statisticDescription}
                      ></p>
                    </div>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} className={cls.right}>
                <Box className={cls.wrapperImg}>
                  <MobileBanner />
                  {/* <img src="images/newDesign/tel.png" alt="tel" /> */}
                </Box>
              </Grid>
            </Grid>
            <div className={cls.arrowHandle}>
              <ArrowIcon />
              <div className={cls.text}>
                <ClickHereIcon />
              </div>
            </div>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
