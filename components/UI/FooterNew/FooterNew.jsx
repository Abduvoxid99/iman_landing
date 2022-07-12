import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import cls from "./FooterNew.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  Vector,
  ImanNewLogo,
  FacebookNewLogo,
  InstagramNewLogo,
  TelegramNewLogo,
} from "../Icons";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "f5f5f5",
    "& .MuiAccordion-root.Mui-expanded ": {
      marginBottom: "0",
    },
    "& .MuiAccordionSummary-content": {
      margin: "25px 0 !important",
    },
    "& .MuiAccordion-rounded": {
      borderRadius: 0,
      backgroundColor: "transparent",
    },
  },
}));
const accordianData = [
  {
    title: "footer title 2",
    content: "footer text 2",
  },
  {
    title: "footer title 3",
    content: "footer text 3",
  },
  {
    title: "footer title 4",
    content: "footer text 4",
  },
  {
    title: "footer title 5",
    content: "footer text 5",
  },
];

export default function Footer() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <footer className={cls.root}>
      <Container id="contact">
        <Grid container>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ position: "relative" }}
          >
            <Box className={cls.firstBox}>
              <Box className={cls.firstBoxitem}>
                <h3 className={cls.itemTitle}>{t("company")}</h3>
                <ul className={cls.itemList}>
                  <li>
                    <Link locale={router.locale} href="/#news">
                      <a onClick={(e) => e.preventDefault()}>{t("news")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/company#partners">
                      <a>{t("partners")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/company#our-team">
                      <a>{t("team")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/company#career">
                      <a>{t("career")}</a>
                    </Link>
                  </li>
                </ul>
              </Box>
              <Box className={cls.firstBoxitem}>
                <h3 className={cls.itemTitle}>{t("Legal")}</h3>
                <ul className={cls.itemList}>
                  <li>
                    <Link locale={router.locale} href="/terms?test">
                      <a> {t("Terms & Conditions")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/privacy?test">
                      <a>{t("Privacy Policy")}</a>
                    </Link>
                  </li>
                </ul>
              </Box>
              <Box className={cls.firstBoxitem}>
                <h3 className={cls.itemTitle}>{t("How it works?1")}</h3>
                <ul className={cls.itemList}>
                  <li>
                    <Link locale={router.locale} href="/how-it-works2">
                      <a> {t("How it works?2")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/sharia">
                      <a>{t("sharia_compliance")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale={router.locale} href="/question?test">
                      <a>{t("FAQ")}</a>
                    </Link>
                  </li>
                </ul>
              </Box>
              <Box className={cls.firstBoxitem}>
                <h3 className={cls.itemTitle}>{t("Contact us")}</h3>
                <ul className={cls.itemList}>
                  <li>
                    <a href="mailto: invest@iman.uz">invest@iman.uz</a>
                  </li>
                  <li>
                    <Link href={`tel: +998781130030`}>
                      <a>{"+998 78 113 00 30"}</a>
                    </Link>
                  </li>
                  <li>
                    <a>{t("footer-section-text")}</a>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box className={cls.secondBox}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "footer title 1"}
                  onChange={handleChange("footer title 1")}
                >
                  <AccordionSummary
                    expandIcon={<Vector />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={cls.title}>
                      {t("footer title 1")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={cls.content}>
                      {router.locale === "uz" ? (
                        <>
                          {" "}
                          {t("footer text 1 1")}{" "}
                          <a
                            href="https://publicreg.myafsa.com/details/210440900113/"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>
                          , {t("footer text 1 2")}{" "}
                          <a
                            href="https://orginfo.uz/organizations/307128450"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>{" "}
                          {t("footer text 1 3")}
                        </>
                      ) : router.locale === "ru" ? (
                        <>
                          {" "}
                          {t("footer text 1 1")}{" "}
                          <a
                            href="https://publicreg.myafsa.com/details/210440900113/"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>{" "}
                          {t("footer text 1 2")}{" "}
                          <a
                            href="https://orginfo.uz/organizations/307128450"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>{" "}
                          {/* {t('footer text 1 3')} */}
                        </>
                      ) : (
                        <>
                          {" "}
                          {t("footer text 1 1")}{" "}
                          <a
                            href="https://publicreg.myafsa.com/details/210440900113/"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>{" "}
                          {t("footer text 1 2")}{" "}
                          <a
                            href="https://orginfo.uz/organizations/307128450"
                            target="_blank"
                          >
                            {t("footer text 1 4")}
                          </a>{" "}
                          {/* {t('footer text 1 3')} */}
                        </>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {accordianData?.map((elm, index) => (
                  <Accordion
                    expanded={expanded === elm.title}
                    key={index}
                    onChange={handleChange(elm.title)}
                  >
                    <AccordionSummary
                      expandIcon={<Vector />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={cls.title}>
                        {t(elm?.title)}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        className={cls.content}
                        dangerouslySetInnerHTML={{
                          __html: t(elm?.content),
                        }}
                      ></Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Box>
            <Box className={cls.privacy}>
              <div className={cls.left}>
                <ImanNewLogo className={cls.logo} />
                <Typography className={cls.copyright}>
                  {t("iman-privacy")}
                </Typography>
              </div>
              <div className={cls.social}>
                <div>
                  <a
                    href={"https://www.facebook.com/iman.invest"}
                    target="_blank"
                  >
                    <FacebookNewLogo />
                  </a>
                </div>
                <div>
                  <a href={"https://t.me/imaninvest"} target="_blank">
                    <TelegramNewLogo />
                  </a>
                </div>
                <div>
                  <a
                    href={"https://www.instagram.com/imaninvest/"}
                    target="_blank"
                  >
                    <InstagramNewLogo />
                  </a>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
