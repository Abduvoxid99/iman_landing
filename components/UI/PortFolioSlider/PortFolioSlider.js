import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import ReactSlick from "react-slick";
import Portfolio from "../Portfolio/index";
import { useTranslation, i18n } from "next-i18next";
import cls from "./PortFolioSlider.module.scss";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import { useRouter } from "next/router";

export default function PortFolioSlider() {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight styles="nextButton" />,
    prevArrow: <ArrowLeft styles="prevButton" />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const router = useRouter();
  const info = [
    {
      img: `/images/portfolio/port1${router.locale}.png`,
      name: t("invest review name 1"),
      text: t("invest review text 1"),
      position: t("invest review position 1"),
      linked: "https://www.linkedin.com/in/nodirbek-yuldashov-acca-b3916930/",
      personImg: "/images/person.png",
    },
    {
      img: `/images/portfolio/port2${router.locale}.png`,
      name: t("invest review name 2"),
      text: t("invest review text 2"),
      position: t("invest review position 2"),
      linked: "https://www.linkedin.com/in/dzufarov/",
      personImg: "/images/ceo.png",
    },
    {
      img: `/images/portfolio/port3${router.locale}.png`,
      name: t("invest review name 3"),
      position: t("invest review position 3"),
      text: t("invest review text 3"),
      linked: "",
      personImg: "/images/ceo2.png",
    },
    {
      img: `/images/portfolio/port4${router.locale}.png`,
      name: t("invest review name 4"),
      text: t("invest review text 4"),
      position: t("invest review position 4"),
      linked: "",
      personImg: "/images/ceo3.png",
    },
    {
      img: `/images/portfolio/port5${router.locale}.png`,
      name: t("invest review name 5"),
      text: t("invest review text 5"),
      position: t("invest review position 5"),
      linked:
        "https://www.linkedin.com/in/isomiddin-anvarov-b57bb8108/?originalSubdomain=uz",
      personImg: "/images/ceo4.png",
    },
    {
      img: `/images/portfolio/port6${router.locale}.png`,
      name: t("invest review name 6"),
      text: t("invest review text 6"),
      position: t("invest review position 6"),
      linked: "https://www.linkedin.com/in/shakhboz-tokhirov-221567158/",
      personImg: "/images/ceo5.png",
    },
  ];
  return (
    <div className={cls.root} id="ourinvest">
      <Container className={cls.container}>
        <Box className={cls.box}>
          <Typography className={cls.title}>{t("invest review")}</Typography>

          {router.locale && (
            <ReactSlick {...settings} className="portfolio-slider">
              {info.map((data, index) => (
                <Portfolio
                  key={index}
                  imgUrl={data.img}
                  name={data.name}
                  personImg={data.personImg}
                  text={data.text}
                  position={data.position}
                  linked={data.linked}
                />
              ))}
            </ReactSlick>
          )}
        </Box>
      </Container>
    </div>
  );
}
