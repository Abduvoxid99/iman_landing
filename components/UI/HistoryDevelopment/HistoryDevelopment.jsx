import React from "react";
import { Box, Container } from "@material-ui/core";
import ReactSlick from "react-slick";
import cls from "./HistoryDevelopment.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import ItemHistory from "./ItemHistory";
import { responsive } from "./data";

export default function HistoryDevelopment() {
  const { t } = useTranslation("common");

  return (
    <div className={cls.root} id="history">
      <Container className={cls.container}>
        <Fade center>
          <div>
            <h3>{t("few_words_about_us")}</h3>
            <h2 className="g-title">{t("history_title")}</h2>
            <p className="g-desc">{t("history_descr")} </p>
            <Box className={cls.row}>
              <ReactSlick
                {...{
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  responsive,
                  swipeToSlide: true,
                  lazyLoad: true,
                  nextArrow: <ArrowRight styles="nextButtonCustom" />,
                  prevArrow: <ArrowLeft styles="prevButtonCustom" />,
                }}
                className="custom-slider"
              >
                {[0, 1, 2, 3, 4].map((item, index) => (
                  <ItemHistory key={index} />
                ))}
              </ReactSlick>
            </Box>
          </div>
        </Fade>
      </Container>
    </div>
  );
}
