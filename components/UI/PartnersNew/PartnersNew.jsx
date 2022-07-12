import React from "react";
import Card from "@material-ui/core/Card";
import cls from "./PartnersNew.module.scss";
import { Box, Container } from "@material-ui/core";
import ReactSlick from "react-slick";
import { useTranslation } from "next-i18next";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";

function Partners() {
  const responsive = [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
  ];

  const { t } = useTranslation("common");

  const partners = [
    {
      title: t("partners title 2"),
      text: t("partners_text_2"),
      img: "/images/company/payme.svg",
    },
    {
      title: t("partners title 3"),
      text: t("partners_text_3"),
      img: "/images/company/ipoteka.svg",
    },
    {
      title: t("partners title 4"),
      text: t("partners_text_4"),
      img: "/images/company/dentos.svg",
    },
    {
      title: t("partners title 5"),
      text: t("partners_text_5"),
      img: "",
    },
    {
      title: t("partners title 6"),
      text: t("partners_text_6"),
      img: "",
    },
    {
      title: t("partners title 7"),
      text: t("partners_text_7"),
      img: "",
    },
    {
      title: t("partners title 8"),
      text: t("partners_text_8"),
      img: "",
    },
  ];
  return (
    <div className={cls.root} id="partners">
      <Container id="partners" className={cls.container}>
        <h2 className="g-title">{t("our_partners")}</h2>
        <ReactSlick
          {...{
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive,
            nextArrow: (
              <ArrowRight styles="nextButtonCustom nextButtonCulture" />
            ),
            prevArrow: (
              <ArrowLeft styles="prevButtonCustom prevButtonCulture" />
            ),
          }}
          className="custom-slider"
        >
          {partners.map((item, index) => (
            <Box key={index} className={`${cls.col}`}>
              <Card className={cls.card}>
                <div className={cls.img}>
                  <LazyLoadImage
                    src={item.img}
                    alt={item.title}
                    effect="blur"
                  />
                </div>
                <div className={cls.description}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  ></p>
                </div>
              </Card>
            </Box>
          ))}
        </ReactSlick>
      </Container>
    </div>
  );
}

export default trackWindowScroll(Partners);
