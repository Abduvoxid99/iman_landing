import React, { useEffect, useState } from "react";
import cls from "./HeaderNew.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ImanNewLogo,
  FacebookNewLogo,
  InstagramNewLogo,
  TelegramNewLogo,
} from "../Icons";
import Link from "next/link";
// import ResponseMenu from "../ResponseMenu/ResponseMenu";
import ResponseMenuNew from "../ResponseMenuNew/ResponseMenuNew";
// import Headroom from "react-headroom";

function HeaderNew() {
  const [dowland, setDowland] = useState(false);
  const [device, setDevice] = useState("");
  const [active, setActive] = useState(true);
  const { t } = useTranslation("common");

  const handleOpenDowland = () => {
    setDowland(true);
    toggleDrawer("right", false)({ type: "onClick" });
  };
  const handleCloseDowland = () => {
    setDowland(false);
  };

  // useEffect(() => {
  //   const userAgent = navigator.userAgent;
  //   if (/android/i.test(userAgent)) {
  //     setDevice("android");
  //   }
  //   if (/iPad|iPhone|iPod/i.test(userAgent)) {
  //     setDevice("ios");
  //   }
  // }, []);

  const router = useRouter();

  const changeLang = (e, lang) => {
    e.preventDefault();
    // i18n.changeLanguage(lang)
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const handleScroll = () => {
  //   var someDiv = document?.getElementById("someDiv");
  //   var distanceToTop = someDiv?.getBoundingClientRect()?.top;

  //   const userAgent = navigator.userAgent;

  //   if (/iPad|iPhone|iPod/i.test(userAgent) && distanceToTop < -105) {
  //     setActive(false);
  //   } else if (/android/i.test(userAgent) && distanceToTop < -65) {
  //     setActive(false);
  //   } else {
  //     setActive(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div style={{ marginBottom: "96px" }}>
      <div id="someDiv">
        {/* <Headroom> */}
        <div className={cls.root}>
          <Container>
            <div className={cls.header}>
              <div className={cls.brand}>
                <Link href={"/index2"} locale={router.locale}>
                  <a>
                    <ImanNewLogo />
                  </a>
                </Link>
              </div>

              <div
                className={cls.hamburgerIcon}
                onClick={toggleDrawer("right", true)}
              >
                <img src="images/icons/hamburger.svg" alt="hamburger" />
              </div>

              <div className={cls.box}>
                <ul className={cls.list}>
                  <li className={cls.item}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={cls.listItem}
                    >
                      {t("How it works?1")} <ExpandMoreIcon />
                    </a>
                    <div className={cls.childList}>
                      <ul>
                        <li className={cls.childItems}>
                          <Link href="/how-it-works2" locale={router.locale}>
                            <a>
                              {t("How it works?2")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link href={"/question?test"} locale={router.locale}>
                            <a>
                              {t("frequently_asked_questions")}{" "}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link href={"/report?test"} locale={router.locale}>
                            <a>
                              {t("report title")} <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={cls.item}>
                    <Link locale={router.locale} href={"/sharia"}>
                      <a className={cls.listItem}>{t("sharia_compliance")}</a>
                    </Link>
                  </li>

                  <li className={cls.item}>
                    <Link href="/company" locale={router.locale}>
                      <a
                        // onClick={(e) => e.preventDefault()}
                        className={cls.listItem}
                      >
                        {t("about_company")} <ExpandMoreIcon />
                      </a>
                    </Link>
                    <div className={cls.childList}>
                      <ul>
                        <li className={cls.childItems}>
                          <Link
                            href="/company/#our-mission"
                            locale={router.locale}
                          >
                            <a>
                              {t("our_mission_title")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link
                            href="/company/#valuation"
                            locale={router.locale}
                          >
                            <a>
                              {t("value_title")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link href="/company/#culture" locale={router.locale}>
                            <a>
                              {t("culture")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link href="/company/#history" locale={router.locale}>
                            <a>
                              {t("history_title")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link
                            href="/company/#partners"
                            locale={router.locale}
                          >
                            <a>
                              {t("our_partners")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link href="/company/#career" locale={router.locale}>
                            <a>
                              {t("career")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link
                            href="/company/#our-team"
                            locale={router.locale}
                          >
                            <a>
                              {t("Our team")}
                              <ArrowForwardIosIcon />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className={`${cls.item} ${cls.lastItem}`}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={cls.listItem}
                    >
                      <div className={cls.lang}>
                        {router.locale && (
                          <img
                            src={
                              router.locale === "en"
                                ? "/images/eng.jpg"
                                : router.locale === "ru"
                                ? "/images/rus.jpg"
                                : "/images/uzb.png"
                            }
                            alt="language"
                          />
                        )}
                      </div>
                      <span className={cls.langName}>
                        {router.locale === "en"
                          ? "English"
                          : router.locale === "ru"
                          ? "Русский"
                          : router.locale === "uz"
                          ? "Ўзбек"
                          : "Русский"}
                      </span>
                      <ExpandMoreIcon />
                    </a>

                    <div className={cls.childList}>
                      <ul>
                        <li className={cls.childItems}>
                          <Link
                            scroll={false}
                            href={router.pathname}
                            locale={"en"}
                          >
                            <a>English</a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link
                            scroll={false}
                            href={router.pathname}
                            locale={"ru"}
                          >
                            <a>Русский</a>
                          </Link>
                        </li>
                        <li className={cls.childItems}>
                          <Link
                            scroll={false}
                            href={router.pathname}
                            locale={"uz"}
                          >
                            <a>Ўзбек</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
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
              </div>
            </div>
          </Container>
        </div>
        {/* </Headroom> */}
      </div>
      <ResponseMenuNew
        toggleDrawer={toggleDrawer}
        state={state}
        handleOpenDowland={handleOpenDowland}
        changeLang={changeLang}
      />
    </div>
  );
}

export default HeaderNew;
