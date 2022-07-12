import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import cls from "./ResponseMenu.module.scss";
import { ImanNewLogo } from "../Icons";
import CancelIcon from "@material-ui/icons/Cancel";
import { useTranslation } from "next-i18next";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f5f5f5",
  },
  list: {
    width: "50vw",
    "@media (max-width: 600px)": {
      width: "100vw",
    },
  },
  fullList: {
    width: "auto",
  },
});

const Accordion = withStyles({
  root: {
    background: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#fff",
    padding: "0",
    minHeight: 0,
  },
  content: {
    margin: "0!important",
    display: "flex",
    justifyContent: "space-between",
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "20px 0",
    fontSize: "20px",
    lineHeight: "24px",
  },
}))(MuiAccordionDetails);

export default function ResponseMenu({
  toggleDrawer,
  state,
  handleOpenDowland,
}) {
  const classes = useStyles();
  const router = useRouter();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState("");
  useEffect(() => {
    const handleRouteChange = () => {
      toggleDrawer("right", false)({ type: "onClick" });
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return ["left", "right", "top", "bottom"].map((anchor, i) => (
    <Drawer
      key={i}
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        //onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className={cls.menu}>
          <div className={cls.topData}>
            <Link href={"/"} locale={router.locale}>
              <a>
                {" "}
                <ImanNewLogo />
              </a>
            </Link>
            <CancelIcon onClick={toggleDrawer(anchor, false)} />
          </div>
          <div className={cls.item}>
            <Button onClick={handleOpenDowland}>{t("become a partner")}</Button>
          </div>
          <div className={cls.item}>
            <Accordion
              square
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className={cls.acardion}
              >
                <span className={cls.title}>{t("How it works?1")}</span>
                <ExpandMoreIcon />
              </AccordionSummary>
              <AccordionDetails>
                <Link locale={router.locale} href={"/question"}>
                  <a>{t("frequently_asked_questions")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/how-it-works">
                  <a>{t("How it works?")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/report">
                  <a>{t("report title")}</a>
                </Link>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={cls.item}>
            <Accordion
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className={cls.acardion}
              >
                <span className={cls.title}>{t("about us")}</span>
                <ExpandMoreIcon />
              </AccordionSummary>

              <AccordionDetails>
                <Link locale={router.locale} href={"/culture"}>
                  <a>{t("justice principles")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/#team">
                  <a onClick={toggleDrawer(anchor, false)}>{t("team")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/#news">
                  <a onClick={toggleDrawer(anchor, false)}>{t("news")}</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/#ourinvest">
                  <a onClick={toggleDrawer(anchor, false)}>
                    {t("our investors")}
                  </a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                {" "}
                <Link locale={router.locale} href="/#partners">
                  <a onClick={toggleDrawer(anchor, false)}>
                    {t("our partners header")}
                  </a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link locale={router.locale} href="/career">
                  <a>{t("career")}</a>
                </Link>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={cls.item}>
            <span className={cls.title}>
              {" "}
              <Link locale={router.locale} href="/principles">
                <a className={cls.listItem}>{t("principles")}</a>
              </Link>
            </span>
          </div>
          <div className={cls.item}>
            <span className={cls.title}>
              <Link locale={router.locale} href="/#contact">
                <a
                  onClick={toggleDrawer(anchor, false)}
                  className={cls.listItem}
                >
                  {t("contact")}
                </a>
              </Link>
            </span>
          </div>
          <div className={cls.item}>
            <Accordion
              square
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className={cls.acardion}
              >
                <span className={cls.title}>{t("language")}</span>
                <ExpandMoreIcon />
              </AccordionSummary>
              <AccordionDetails>
                <Link scroll={false} href={router.pathname} locale={"en"}>
                  <a>English</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link scroll={false} href={router.pathname} locale={"ru"}>
                  <a>Русский</a>
                </Link>
              </AccordionDetails>
              <AccordionDetails>
                <Link scroll={false} href={router.pathname} locale={"uz"}>
                  <a>O`zbek</a>
                </Link>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </Drawer>
  ));
}
