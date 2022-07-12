import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import cls from "./Chart.module.scss";
import { useTranslation, i18n } from "next-i18next";
import Tables from "../Table/Table";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { useRouter } from "next/router";

function Chart() {
  const { t } = useTranslation("common");
  const [activeButton, setActiveButton] = useState(0);
  const [part, setPart] = useState("bank");
  const router = useRouter();
  const buttonData = [
    { label: t("Bank deposit"), slug: "bank" },
    { label: t("Car / real estate rental"), slug: "car" },
    { label: t("S&P 500"), slug: "sp" },
    { label: t("mattress"), slug: "matter" },
  ];

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Box className={cls.box}>
          <div className={cls.upCard}>
            <Typography className={cls.title}>
              {t("IMAN vs other investment ideas")}
            </Typography>
            <div className={cls.groupBtn}>
              {buttonData.map((btn, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveButton(index);
                    setPart(btn.slug);
                  }}
                  className={`${cls.btn} ${
                    activeButton === index && cls.active
                  }`}
                >
                  {btn.label}
                </div>
              ))}
            </div>
            {/*  */}
            {part === "car" ? (
              <div className={cls.charts}>
                <div className={cls.img}>
                  {router.locale === "en" && (
                    <LazyLoadImage
                      src="/images/lines/linecaren.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "ru" && (
                    <LazyLoadImage
                      src="/images/lines/linecarru.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "uz" && (
                    <LazyLoadImage
                      src="/images/lines/linecaruz.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                </div>
                <div className={cls.chartRight}>
                  <div className={cls.rows}>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("IMAN Invest")}: &nbsp;
                        <span className={cls.procent}>+25%</span>
                      </Typography>
                    </div>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("Car / real estate rental")}: &nbsp;
                        <span className={cls.procent}>+12%</span>
                      </Typography>
                    </div>
                  </div>
                  <Typography className={cls.lastText}>
                    {t("calculation")}
                  </Typography>
                </div>
              </div>
            ) : part === "bank" ? (
              <div className={cls.charts}>
                <div className={cls.img}>
                  {router.locale === "en" && (
                    <LazyLoadImage
                      src="/images/lines/linebanken.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "ru" && (
                    <LazyLoadImage
                      src="/images/lines/linebankru.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "uz" && (
                    <LazyLoadImage
                      src="/images/lines/linebankuz.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                </div>
                <div className={cls.chartRight}>
                  <div className={cls.rows}>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("IMAN Invest")}: &nbsp;
                        <span className={cls.procent}>+25%</span>
                      </Typography>
                    </div>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("Bank deposit")}: &nbsp;
                        <span className={cls.procent}>+21%</span>
                      </Typography>
                    </div>
                  </div>
                  <Typography className={cls.lastText}>
                    {t("calculation")}
                  </Typography>
                </div>
              </div>
            ) : part === "matter" ? (
              <div className={cls.charts}>
                <div className={cls.img}>
                  {router.locale === "en" && (
                    <LazyLoadImage
                      src="/images/lines/linematterren.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "ru" && (
                    <LazyLoadImage
                      src="/images/lines/linematterrru.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "uz" && (
                    <LazyLoadImage
                      src="/images/lines/linematterruz.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                </div>
                <div className={cls.chartRight}>
                  <div className={cls.rows}>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("IMAN Invest")}: &nbsp;
                        <span className={cls.procent}>+25%</span>
                      </Typography>
                    </div>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("mattress")}: &nbsp;
                        <span className={cls.procent}>0%</span>
                      </Typography>
                    </div>
                  </div>
                  <Typography className={cls.lastText}>
                    {t("calculation")}
                  </Typography>
                </div>
              </div>
            ) : part === "sp" ? (
              <div className={cls.charts}>
                <div className={cls.img}>
                  {router.locale === "en" && (
                    <LazyLoadImage
                      src="/images/lines/linespen.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "ru" && (
                    <LazyLoadImage
                      src="/images/lines/linespru.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                  {router.locale === "uz" && (
                    <LazyLoadImage
                      src="/images/lines/linespuz.png"
                      alt="Line Graph"
                      effect="blur"
                    />
                  )}
                </div>
                <div className={cls.chartRight}>
                  <div className={cls.rows}>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("IMAN Invest")}: &nbsp;
                        <span className={cls.procent}>+25%</span>
                      </Typography>
                    </div>
                    <div className={cls.invest}>
                      <div className={cls.circle} />
                      <Typography className={cls.textInvest}>
                        {t("S&P 500")}: &nbsp;
                        <span className={cls.procent}>+15%</span>
                      </Typography>
                    </div>
                  </div>
                  <Typography className={cls.lastText}>
                    {t("calculation")}
                  </Typography>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Container>
      <Tables />
    </div>
  );
}

export default trackWindowScroll(Chart);
