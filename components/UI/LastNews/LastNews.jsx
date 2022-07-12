import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import cls from "./LastNews.module.scss";
import ReactSlick from "react-slick";
import { useTranslation, i18n } from "next-i18next";

import New from "./New";
import DialogNews from "./DialogNews";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import { useRouter } from "next/router";
import { news } from "./news";

export default function LastNews() {
  const [getData, setGetData] = useState("");
  const { t } = useTranslation("common");
  const router = useRouter();
  const myRef = useRef(null);

  // useEffect(() => {
  //   if (router.query.news === "true") {
  //     var el = document.getElementById("news");
  //     window.scrollTo({
  //       top: el.getBoundingClientRect().top + 400,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [router.query]);

  const responsive = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ];

  return (
    <div ref={myRef} className={cls.root} id="news">
      <Container className={cls.container}>
        <Box className={cls.box}>
          <Typography className={cls.title}>{t("last_news")}</Typography>
          <ReactSlick
            {...{
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive,
              adaptiveHeight: true,
              swipeToSlide: true,
              nextArrow: <ArrowRight styles="nextButtonCustom" />,
              prevArrow: <ArrowLeft styles="prevButtonCustom" />,
            }}
            className="custom-slider"
          >
            {news.map((data, ind) => (
              <New key={ind} setGetData={setGetData} data={data} />
            ))}
          </ReactSlick>
        </Box>
      </Container>
      <DialogNews data={getData} />
    </div>
  );
}
