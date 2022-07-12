import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import cls from "./Footer.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useWidth } from "../../../utils/useWidth";

export default function Footer() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div
      style={{
        background:
          useWidth() < 576 && router.pathname !== "/" ? "#f8f8f8" : "#fff",
      }}
    >
      <footer
        className={cls.root}
        style={{
          clipPath:
            router.pathname !== "/" && router.pathname !== "/question"
              ? "none"
              : "polygon(0 7%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* <div className='bgTop'>
          <img src='/images/footer-bg.png' />
        </div> */}
        <Container id="contact">
          <Grid container>
            <Grid
              item
              lg={12}
              md={6}
              sm={12}
              xs={12}
              style={{ position: "relative" }}
            >
              <Box className={cls.box}>
                <ul className={cls.list}>
                  <div className={cls.hasChild}>
                    <li className={cls.item}>
                      {/* <Link href={'/question'}> */}
                      <a className={cls.itemList}>{t("How it works?1")}</a>
                      {/* </Link> */}
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href={"/question"}>
                        <a className={cls.childItemList}>
                          {t("frequently_asked_questions")}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href="/how-it-works">
                        <a className={cls.childItemList}>
                          {t("How it works?3")}
                        </a>
                      </Link>
                    </li>
                  </div>
                  <div className={cls.hasChild}>
                    <li className={cls.item}>
                      {/* <Link href={'/'}> */}
                      <a
                        onClick={(e) => e.preventDefault()}
                        className={cls.itemList}
                      >
                        {t("about us")}
                      </a>
                      {/* </Link> */}
                    </li>
                    {/* <li className={cls.childItem}>
                      <Link href={'/mission'}>
                        <a className={cls.childItemList}>{t('mission')}</a>
                      </Link>
                    </li> */}
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href={"/"}>
                        <a className={cls.childItemList}>
                          {t("justice principles")}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href="/#team">
                        <a className={cls.childItemList}>{t("team")}</a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href="/#news">
                        <a className={cls.childItemList}>{t("news")}</a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href="/#partners">
                        <a className={cls.childItemList}> {t("partners")}</a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href="/career">
                        <a className={cls.childItemList}>{t("career")}</a>
                      </Link>
                    </li>
                  </div>
                  {/* ///// */}

                  {/* //// */}
                  <div className={cls.hasChild}>
                    <li className={cls.item}>
                      {/* <Link href={'/'}> */}
                      <a className={cls.itemList}>{t("Legal")}</a>
                      {/* </Link> */}
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href={"/terms"}>
                        <a className={cls.childItemList}>
                          {t("Terms & Conditions")}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <Link locale={router.locale} href={"/privacy"}>
                        <a className={cls.childItemList}>
                          {t("Privacy Policy")}
                        </a>
                      </Link>
                    </li>
                    <li className={cls.childItem}>
                      <a
                        href="https://cdn.iman.uz/iman/%D0%A2%D0%B0%D0%B1%D1%8A%D1%81%D0%B8%D1%81%20%D1%88%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%BC%D0%B0%D1%81%D0%B8.PDF"
                        target="_blank"
                        download
                        className={cls.childItemList}
                      >
                        {t("footer-text-3")}
                      </a>
                    </li>
                  </div>
                  {/* ////// */}
                  <div className={cls.hasChild}>
                    <li className={cls.item}>
                      {/* <Link href={'/'}> */}
                      <a className={cls.itemList}>{t("Contact us")}</a>
                      {/* </Link> */}
                    </li>
                    <li className={cls.childItem}>
                      <a
                        href="mailto: invest@iman.uz"
                        className={cls.childItemList}
                      >
                        invest@iman.uz
                      </a>
                    </li>
                    <li className={cls.childItem}>
                      <Link href={`tel: +998781130030`}>
                        <a className={cls.childItemList}>
                          {"+998 78 113 00 30"}
                        </a>
                      </Link>
                      {/* 
                      <Link href={`tel: +998993534717`}>
                        <a className={cls.childItemList}>
                          +998&nbsp;99&nbsp;353&nbsp;47&nbsp;17
                        </a>
                      </Link>
                      <Link href={`tel: +998999455454`}>
                        <a className={cls.childItemList}>
                          +998&nbsp;99&nbsp;945&nbsp;54&nbsp;54
                        </a>
                      </Link> */}
                    </li>
                    {/* <li className={cls.childItem}>
                      <Link href={`tel:+998999455454`}>
                        <a className={cls.childItemList}>
                          +99899&nbsp;945&nbsp;54&nbsp;54
                        </a>
                      </Link>
                    </li> */}
                  </div>
                  <div className={cls.rightText}>
                    <p>{t("footer-section-text")}</p>
                  </div>
                </ul>
              </Box>
              <Box className={cls.secondBox}>
                <Typography className={cls.title}>
                  {t("footer title 1")}
                </Typography>
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
              </Box>
              <Box className={cls.secondBox}>
                <Typography className={cls.title}>
                  {t("footer title 2")}
                </Typography>
                <Typography
                  className={cls.content}
                  dangerouslySetInnerHTML={{ __html: t("footer text 2") }}
                >
                  {/* {t('footer text 2')} */}
                </Typography>
              </Box>
              <Box className={cls.secondBox}>
                <Typography className={cls.title}>
                  {t("footer title 3")}
                </Typography>
                <Typography
                  className={cls.content}
                  dangerouslySetInnerHTML={{ __html: t("footer text 3") }}
                >
                  {/* {t('footer text 3')} */}
                </Typography>
              </Box>
              <Box className={cls.secondBox}>
                <Typography className={cls.title}>
                  {t("footer title 4")}
                </Typography>
                <Typography
                  className={cls.content}
                  dangerouslySetInnerHTML={{ __html: t("footer text 4") }}
                >
                  {/* {t('footer text 4')} */}
                </Typography>
              </Box>
              <Box className={cls.secondBox}>
                <Typography className={cls.title}>
                  {t("footer title 5")}
                </Typography>
                <Typography
                  className={cls.content}
                  dangerouslySetInnerHTML={{ __html: t("footer text 5") }}
                >
                  {/* {t('footer text 5')} */}
                </Typography>
              </Box>
              <Box className={cls.textBox}>
                <Typography className={cls.copyright}>
                  {t("iman-privacy")}
                </Typography>

                <div className={cls.row}>
                  <div>
                    <a
                      href={"https://www.facebook.com/iman.invest"}
                      target="_blank"
                    >
                      <img src="/images/icons/facebook.svg" alt="facebook" />
                    </a>
                  </div>
                  <div className={`${cls.icon} ${cls.telegram}`}>
                    <a href={"https://t.me/imaninvest"} target="_blank">
                      <img src="/images/icons/telegram.svg" alt="telegram" />
                    </a>
                  </div>
                  <div className={`${cls.icon} ${cls.instagram}`}>
                    <a
                      href={"https://www.instagram.com/imaninvest/"}
                      target="_blank"
                    >
                      <img src="/images/icons/instagram.svg" alt="instagram" />
                    </a>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}
