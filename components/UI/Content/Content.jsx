import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import cls from "./Content.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Content() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <Box className={cls.row}>
            <div className={`${cls.card} ${cls.card1}`}>
              <h3>{t("How it works?2")}</h3>

              <div className={cls.cardTitle}>
                <p>{t("how it works description")}</p>
              </div>
              <Link href="/how-it-works2" locale={router.locale}>
                <a>
                  <div className={cls.more}>
                    <p>{t("more")}</p>

                    <img src="images/icons/leftArrow.svg" alt="left arrow" />
                  </div>
                </a>
              </Link>

              <img
                className={cls.logo1}
                src="images/newDesign/circle.svg"
                alt="circle card"
              />
            </div>
            <div className={`${cls.card} ${cls.card2}`}>
              <h3>{t("sharia_compliance")}</h3>

              <div className={cls.cardTitle}>
                <p>{t("sharia description")}</p>
              </div>
              <Link href="/sharia" locale={router.locale}>
                <a>
                  <div className={cls.more}>
                    <p>{t("more")}</p>
                    <img src="images/icons/leftArrow.svg" alt="left arrow" />
                  </div>
                </a>
              </Link>
              <img
                className={cls.logo2}
                src="images/newDesign/halal.svg"
                alt="circle card"
              />
            </div>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
