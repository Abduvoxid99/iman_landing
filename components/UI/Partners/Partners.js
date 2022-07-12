import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cls from "./Partners.module.scss";
import { Box, Container } from "@material-ui/core";
import ReactSlick from "react-slick";
import { useTranslation } from "next-i18next";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Zoom from "react-reveal/Zoom";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";

const useStyles = makeStyles({
  media: {
    height: 200,
    objectFit: "cover",
    borderRadius: "16px",
  },
  elevation1: {
    boxShadow: "none",
  },
});

function Partners() {
  const responsive = [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
  ];

  const { t } = useTranslation("common");

  const partners = [
    // {
    //   title: t('partners title 1'),
    //   text: t('partners text 1'),
    //   img: '/images/partners/pr1.jpg',
    // },
    {
      title: t("partners title 2"),
      text: t("partners text 2"),
      img: "/images/partners/pr2.jpg",
    },
    {
      title: t("partners title 3"),
      text: t("partners text 3"),
      img: "/images/partners/pr3.jpg",
    },
    {
      title: t("partners title 4"),
      text: t("partners text 4"),
      img: "/images/partners/pr4.jpg",
    },
    {
      title: t("partners title 5"),
      text: t("partners text 5"),
      img: "/images/partners/pr5.jpg",
    },
    {
      title: t("partners title 6"),
      text: t("partners text 6"),
      img: "/images/partners/pr6.jpg",
    },
    {
      title: t("partners title 7"),
      text: t("partners text 7"),
      img: "/images/partners/pr7.jpg",
    },
    {
      title: t("partners title 8"),
      text: t("partners text 8"),
      img: "/images/partners/pr8.jpg",
    },
  ];
  return (
    <Zoom>
      <div className={cls.body}>
        <Container
          id="partners"
          className={`${cls.container} portfolio-slider`}
        >
          <Typography className={cls.title}>{t("our partners")}</Typography>

          <ReactSlick
            {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive,
              nextArrow: <ArrowRight styles="nextButton" />,
              prevArrow: <ArrowLeft styles="prevButton" />,
            }}
            className="team-slider"
          >
            {partners.map((item, index) => (
              <Box key={index} className={`"box-shadows" ${cls.rowSecond}`}>
                <Card className={cls.card}>
                  <div className={cls.img}>
                    <LazyLoadImage
                      src={item.img}
                      alt={item.title}
                      effect="blur"
                    />
                  </div>
                  <CardContent className={cls.cardRow}>
                    <Typography className={cls.contentTitle}>
                      {item.title}
                    </Typography>
                    <Typography className={cls.content}>{item.text}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </ReactSlick>
        </Container>
      </div>
    </Zoom>
  );
}

export default trackWindowScroll(Partners);
