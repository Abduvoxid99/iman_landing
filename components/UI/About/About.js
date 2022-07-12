import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import cls from "./About.module.scss";
import { useTranslation, i18n } from "next-i18next";
import { useRouter } from "next/router";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";

function About() {
  const myRef = useRef();

  const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <div className={cls.about} id="work">
        <div
          className={`${cls.root} ${router.locale === "ru" ? "" : cls.bgGif}`}
          ref={myRef}
        >
          <Container className={cls.container}>
            <Box className={cls.box}>
              <Typography className={cls.title}>
                {t("How it works?")}
              </Typography>
              <div className={cls.row}>
                <Grid className={cls.grids} container spacing={0}>
                  <Grid item md={5} xs={12}>
                    <div className={cls.leftSide}>
                      {router.locale === "en" && (
                        <LazyLoadImage
                          alt="gif"
                          effect="blur"
                          src="https://cdn.iman.uz/documents/eng.gif"
                        />
                      )}
                      {router.locale === "ru" && (
                        <LazyLoadImage
                          alt="gif"
                          effect="blur"
                          src="https://cdn.iman.uz/documents/rus.gif"
                        />
                      )}
                      {router.locale === "uz" && (
                        <LazyLoadImage
                          alt="gif"
                          effect="blur"
                          src="https://cdn.iman.uz/documents/uz.gif"
                        />
                      )}
                    </div>
                    <Button
                      onClick={handleOpenVideo}
                      size="large"
                      className={cls.videoBtn}
                    >
                      {t("watch video")}
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <div className={cls.rightSide}>
                      <div className={cls.register}>
                        <div className={cls.number}>1</div>
                        <div>
                          <Typography className={cls.contentTitle}>
                            {t("about title 1")}
                          </Typography>
                          <Typography className={cls.content}>
                            {t("about text 1")}
                          </Typography>
                        </div>
                      </div>

                      {/*  */}
                      <div className={cls.register}>
                        <div className={cls.number}>2</div>
                        <div>
                          <Typography className={cls.contentTitle}>
                            {t("about title 2")}
                          </Typography>
                          <Typography className={cls.content}>
                            {t("about text 2")}
                          </Typography>
                        </div>
                      </div>
                      {/*  */}
                      <div className={cls.register}>
                        <div className={cls.number}>3</div>
                        <div>
                          <Typography className={cls.contentTitle}>
                            {t("about title 3")}
                          </Typography>
                          <Typography
                            className={`${cls.content} ${cls.lastContent}`}
                          >
                            {t("about text 3")}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Container>
        </div>
      </div>
      <YouTubeVideo
        openVideo={openVideo}
        handleCloseVideo={handleCloseVideo}
        ruLink="https://www.youtube.com/embed/geuqjbLdYrA"
        engLink="https://www.youtube.com/embed/geuqjbLdYrA"
        uzLink="https://www.youtube.com/embed/geuqjbLdYrA"
      />
    </>
  );
}

export default trackWindowScroll(About);
