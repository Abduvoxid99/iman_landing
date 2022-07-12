import { Box, Container } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import ReactSlick from "react-slick";
import cls from "./CultureCompany.module.scss";
import CultureItem from "./CultureItem";
import ContentCulture from "./ContentCulture";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import { responsive, cultures } from "./data";

export default function CultureCompany() {
  const { t } = useTranslation("common");
  const [getData, setGetData] = useState("");
  const [activeCard, setActiveCard] = useState("team");
  const slider = useRef(null);

  function scroll() {
    if (slider === null) return 0;
    slider.current.slickNext();
  }

  useEffect(() => {
    scroll();
  }, [getData]);

  return (
    <div className={cls.root} id="culture">
      <Container className={cls.container}>
        <Fade center>
          <h2 className="g-title">{t("culture")}</h2>
          <Box className={cls.row}>
            <ReactSlick
              {...{
                infinite: true,
                speed: 300,
                slidesToShow: 4.1,
                slidesToScroll: 1,
                responsive,
                centerMode: true,
                swipeToSlide: true,
                lazyLoad: true,
                nextArrow: (
                  <ArrowRight styles="nextButtonCustom nextButtonCulture" />
                ),
                prevArrow: (
                  <ArrowLeft styles="prevButtonCustom prevButtonCulture" />
                ),
              }}
              ref={slider}
              className="custom-slider"
            >
              {cultures.map((data, index) => (
                <CultureItem
                  key={index}
                  setActiveCard={setActiveCard}
                  activeCard={activeCard}
                  setGetData={setGetData}
                  data={data}
                  index={index}
                />
              ))}
            </ReactSlick>
          </Box>
        </Fade>
      </Container>
      <Box className={cls.container2}>
        <Container className={cls.content}>
          <ContentCulture data={getData} />
        </Container>
      </Box>
    </div>
  );
}
