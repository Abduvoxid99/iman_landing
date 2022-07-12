import React, { useEffect, useState } from "react";
import cls from "./Header.module.scss";
import { Button, Container } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import { ImanLogo } from "../Icons";
import Link from "next/link";
import ResponseMenu from "../ResponseMenu/ResponseMenu";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DownloadDialog from "../DownloadDialog/DownloadDialog";
import Headroom from "react-headroom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CloseIcon from "@material-ui/icons/Close";
function Header() {
  const [dowland, setDowland] = useState(false);
  const [device, setDevice] = useState("");
  const [popup, setPopup] = useState(true);
  const [active, setActive] = useState(true);
  const { t } = useTranslation("common");

  const handleOpenDowland = () => {
    setDowland(true);
    toggleDrawer("right", false)({ type: "onClick" });
  };
  const handleCloseDowland = () => {
    setDowland(false);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      setDevice("android");
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      setDevice("ios");
    }
  }, []);

  const router = useRouter();

  const changeLang = (e, lang) => {
    e.preventDefault();
    // i18n.changeLanguage(lang)
  };

  const [state, setState] = React.useState({
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

  const handleScroll = () => {
    // console.log(window.pageYOffset)
    var someDiv = document?.getElementById("someDiv");
    var distanceToTop = someDiv?.getBoundingClientRect()?.top;

    const userAgent = navigator.userAgent;

    if (/iPad|iPhone|iPod/i.test(userAgent) && distanceToTop < -105) {
      setActive(false);
    } else if (/android/i.test(userAgent) && distanceToTop < -65) {
      setActive(false);
    } else {
      setActive(true);
    }

    // if (device && device === 'ios' && window.pageYOffset > 105) {
    //   console.log(window.pageYOffset)
    //   setActive(false)
    // }

    // if (device && device === 'android' && window.pageYOffset > 64) {
    //   console.log(device)
    //   setActive(false)
    // } else {
    //   setActive(true)
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="someDiv">
        <Headroom>
          {/* {active && popup && device && (
            <div className={cls.dowlandApp}>
              <div className={cls.rows}>
                <div
                  className={`${device === "ios" ? cls.close : cls.closePlay}`}
                >
                  <CloseIcon onClick={() => setPopup(false)} />
                </div>

                <div
                  className={`${
                    device === "ios" ? cls.appImg : cls.playAppImg
                  }`}
                >
                  <img src="/images/app-icon.png" alt="app-icon" />
                </div>

                <div
                  className={`${device === "ios" ? cls.info : cls.infoPlay}`}
                >
                  {device === 'ios' ? (
                    <>
                  <span className={cls.apTitle}>IMAN INVEST</span>
                  <span className={cls.apPreTitle}>IMAN Group Ltd</span>
                  <div className={cls.apStart}>
                    <Rating name="read-only" value={5} size="small" readOnly />
                  </div>
                  <span className={cls.apBottomTitle}>
                    GET — On the App Store
                  </span>
                  </>
                  ) : (
                    <>
                  <span className={cls.apTitle}>IMAN INVEST</span>
                  <span className={cls.apPreTitlePlay}>{t("app-text")}</span>
                  </>
                  )}
                </div>
                <div
                  className={`${
                    device === "ios" ? cls.apLink : cls.appPlayLink
                  }`}
                >
                  <a
                    href={
                      device === "ios"
                        ? "https://apps.apple.com/us/app/iman-investor/id1572636618"
                        : "https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US"
                    }
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          )} */}
          <div className={cls.root}>
            <Container>
              <div className={cls.header}>
                <div className={cls.brand}>
                  <Link href={"/"} locale={router.locale}>
                    <a>
                      <ImanLogo />
                    </a>
                  </Link>
                </div>

                <div
                  className={cls.hamburgerIcon}
                  onClick={toggleDrawer("right", true)}
                >
                  <div className={cls.menuIcon}>
                    <MenuIcon />
                  </div>
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
                            <Link href="/how-it-works" locale={router.locale}>
                              <a>
                                {t("How it works?2")}
                                <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link href={"/question"} locale={router.locale}>
                              <a>
                                {t("frequently_asked_questions")}{" "}
                                <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link href={"/report"} locale={router.locale}>
                              <a>
                                {t("report title")}{" "}
                                <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={cls.item}>
                      <a
                        onClick={(e) => e.preventDefault()}
                        className={cls.listItem}
                      >
                        {t("about us")} <ExpandMoreIcon />
                      </a>
                      <div className={cls.childList}>
                        <ul>
                          {/* <li className={cls.childItems}>
                        <Link href={'/mission'}>
                          <a>
                            {t('mission')} <ArrowForwardIosIcon />
                          </a>
                        </Link>
                      </li> */}
                          <li className={cls.childItems}>
                            <Link href={"/culture"} locale={router.locale}>
                              <a>
                                {t("justice principles")}{" "}
                                <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link href="/#team" locale={router.locale}>
                              <a>
                                {t("team")} <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link
                              locale={router.locale}
                              offset={200}
                              href="/#news"
                            >
                              <a>
                                {t("news")} <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link locale={router.locale} href="/#ourinvest">
                              <a>
                                {t("our investors")} <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                          <li className={cls.childItems}>
                            <Link locale={router.locale} href="/#partners">
                              <a>
                                {t("our partners header")}{" "}
                                <ArrowForwardIosIcon />
                              </a>
                            </Link>
                            {/* <Link href={'/'}>
                          <a>
                            {t('partners')} <ArrowForwardIosIcon />
                          </a>
                        </Link> */}
                          </li>
                          <li className={cls.childItems}>
                            <Link locale={router.locale} href={"/career"}>
                              <a>
                                {t("career")} <ArrowForwardIosIcon />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={cls.item}>
                      <Link locale={router.locale} href={"/principles"}>
                        <a className={cls.listItem}>{t("principles")}</a>
                      </Link>
                    </li>
                    <li className={cls.item}>
                      <Link locale={router.locale} href="/#contact">
                        <a className={cls.listItem}>{t("contact")}</a>
                      </Link>
                    </li>

                    <li className={cls.item}>
                      <a
                        onClick={(e) => e.preventDefault()}
                        className={cls.listItem}
                      >
                        <span className={cls.langName}>{router.locale}</span>
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
                  <Button onClick={handleOpenDowland}>
                    {t("become a partner")}
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </Headroom>
      </div>
      <ResponseMenu
        toggleDrawer={toggleDrawer}
        state={state}
        handleOpenDowland={handleOpenDowland}
        changeLang={changeLang}
      />
      <DownloadDialog
        dowland={dowland}
        handleCloseDowland={handleCloseDowland}
        appStoreLink="https://apps.apple.com/us/app/iman-investor/id1572636618"
        googlePlayLink="https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US"
      />
    </>
  );
}

export default Header;
