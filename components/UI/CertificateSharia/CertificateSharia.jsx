import React from "react";
import { Box, Container } from "@material-ui/core";
import ReactSlick from "react-slick";
import cls from "./CertificateSharia.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import { responsive } from "./data";

export default function CertificateSharia() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const data = [
    {
      img: `/images/${router.locale}fatwa.png`,
    },
    {
      img: `/images/${router.locale}fatwa2.png`,
    },
  ];

  return (
    <div className={cls.root} id="history">
      <Container className={cls.container}>
        <Fade center>
          <div>
            <div className={cls.content}>
              <h2 className="g-title">{t("sharia_row_4_title")}</h2>
              <p className="g-desc">{t("sharia_row_4_descr")} </p>
            </div>

            <Box className={cls.row}>
              <ReactSlick
                {...{
                  infinite: true,
                  speed: 800,
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
                {data.map((item, index) => (
                  <div key={index}>
                    <div className={cls.col}>
                      <div className={cls.card}>
                        <img src={item.img} alt="certificate" />
                      </div>
                    </div>
                  </div>
                ))}
              </ReactSlick>
            </Box>
          </div>
        </Fade>
      </Container>
    </div>
  );
}
