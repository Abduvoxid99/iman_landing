import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cls from "./Order.module.scss";
import { Box, Container } from "@material-ui/core";
import ReactSlick from "react-slick";
import { useTranslation } from "next-i18next";
import Zoom from "react-reveal/Zoom";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const useStyles = makeStyles({
  root: {
    maxWidth: "370px",
    borderRadius: "16px",
    "&:hover": {
      boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.08)",
    },
    "@media(max-width:576px)": {
      marginRight: "0",
      width: "100%",
    },
  },
  media: {
    height: 200,
    objectFit: "cover",
    borderRadius: "16px",
  },
  elevation1: {
    boxShadow: "none",
  },
});

function Order() {
  const responsive = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ];

  const { t } = useTranslation("common");

  const classes = useStyles();
  const news = [
    {
      title: "Forbes.uz",
      text: t("blog new text 8"),
      img: "/images/news/new7.jpg",
      link: "https://forbes.uz/process/businessmen/iman_proteus",
    },
    {
      title: "Kapital.uz",
      text: t("blog new text 10"),
      img: "/images/news/new8.jpg",
      link: "https://kapital.uz/iman",
    },
    {
      title: "Minnovation.uz",
      text: t("blog new text 13"),
      img: "/images/news/new11.jpg",
      link: "https://mininnovation.uz/ru/news/2317",
    },
    {
      title: "IT Park",
      text: t("blog new text 14"),
      img: "/images/news/new12.jpg",
      link: "https://it-park.uz/ru/itpark/news/pri-uzbekskom-gosudarstvennom-universitete-mirovyh-yazykov-otkrylsya-inkubacionnyy-centr-forsayt",
    },
    {
      title: "Azon.uz",
      text: t("blog new text 16"),
      img: "/images/news/new14.jpg",
      link: "https://azon.uz/content/views/halqaro-startaplar-tanlovida-uzbekiston",
    },
    {
      title: "Tahsin 2021",
      text: t("blog new text 17"),
      img: "/images/news/new15.jpg",
      link: "https://podrobno.uz/cat/calche/v-tashkente-proshlo-nagrazhdenie-molodezhi-premiey-takhsin-2021/",
    },
    {
      title: "Spot.uz",
      text: t("blog new text 2"),
      img: "/images/news/new2.jpg",
      link: "https://www.spot.uz/ru/2020/11/30/seedstars/",
    },
    {
      title: "Islamicmarkets.com",
      text: t("blog new text 6"),
      img: "/images/news/new6.jpg",
      link: "https://iq.islamicmarkets.com/co/",
    },
    {
      title: "Osmondagi Bolalar",
      text: t("blog new text 1"),
      img: "/images/news/new1.jpg",
      link: "https://www.youtube.com/watch?v=goOgeLwepMM",
    },

    {
      title: "Kapital.uz",
      text: t("blog new text 9"),
      img: "/images/news/new8.jpg",
      link: "https://kapital.uz/iman-startup",
    },

    {
      title: "Spot.uz",
      text: t("blog new text 3"),
      img: "/images/news/new3.jpg",
      link: "https://www.spot.uz/ru/2021/04/21/seedstars/",
    },
    {
      title: "Spot.uz",
      text: t("blog new text 4"),
      img: "/images/news/new4.jpg",
      link: "https://www.spot.uz/ru/2020/08/29/startup/",
    },
    {
      title: "IFN",
      text: t("blog new text 5"),
      img: "/images/news/new5.jpg",
      link: "https://www.islamicfinancenews.com/iman-wins-seedstars-uzbekistan-2020-2",
    },

    {
      title: "Seedstars",
      text: t("blog new text 7"),
      img: "/images/news/new4.jpg",
      link: "https://www.seedstars.com/content-hub/newsroom/17-tech-startups-cee-advance-regionals-seedstars-world-competition-2020/",
    },

    {
      title: "Sharing4good.org",
      text: t("blog new text1"),
      img: "/images/news/new9.jpg",
      link: "http://sharing4good.org/article/94-tech-startups-emerging-markets-advance-regionals-seedstars-world-competition-2020-press",
    },
    {
      title: "ARFI.RU",
      text: t("blog new text 12"),
      img: "/images/news/new10.jpg",
      link: "http://arfi.ru/news/index.php?SECTION_ID=3&ID=70232&sphrase_id=33046",
    },

    {
      title: "Kun.uz",
      text: t("blog new text 15"),
      img: "/images/news/new13.jpg",
      link: "https://kun.uz/uz/news/2020/11/28/xalqaro-startaplar-tanlovida-ozbekiston-nomidan-qaysi-kompaniya-qatnashishi-malum-boldi",
    },
    {
      title: "fttalent.ft.com",
      text: t("blog new text 18"),
      img: "/images/news/new16.jpeg",
      link: "https://fttalent.ft.com/ftxseedstars/",
    },
    {
      title: "Forbes Middle East",
      text: t("blog new text 19"),
      img: "/images/news/new17.png",
      link: "https://www.forbesmiddleeast.com/innovation/startups/islamic-fintech-startup-iman-closes-%241m-seed-fund-to-expand-in-new-muslim-markets",
    },
    {
      title: "Forbes Middle East",
      text: t("blog new text 20"),
      img: "/images/news/new18.png",
      link: "https://www.linkedin.com/posts/forbesmiddleeast_cryptos-fall-while-oil-and-gold-advance-activity-6901890806480007168-VOEG/",
    },
    {
      title: "Reuters",
      text: t("blog new text 21"),
      img: "/images/news/new19.png",
      link: "https://www.reuters.com/markets/funds/uzbek-buy-now-pay-later-islamic-finance-start-up-raises-1-mln-funding-2022-02-22/",
    },
    {
      title: "Forbes Kazakhstan",
      text: t("blog new text 22"),
      img: "/images/news/new17.png",
      link: "https://forbes.kz/finances/investment/kazahstanskie_angelyi_vlojilis_v_finteh-startap_halyalnyih_investitsiy/",
    },
    {
      title: "International Quran News",
      text: t("blog new text 23"),
      img: "/images/news/new20.png",
      link: "https://iqna.ir/en/news/3477922/islamic-finance-start-up-in-uzbekistan-raises-$1-million-funding",
    },
    {
      title: "The Tribune",
      text: t("blog new text 24"),
      img: "/images/news/new21.png",
      link: "https://www.thetribune.com/uzbekistan-based-fintech-startup-in-islamic-financing-closes-its-1-million-seed-round/",
    },
  ];
  return (
    <Zoom>
      <div id="news" className={cls.body}>
        <Container className={cls.container}>
          <Box className={cls.row}>
            <Typography className={cls.title}>{t("iman news")}</Typography>
          </Box>

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
            {news.map((item, index) => (
              <Box key={index} className={`"box-shadows" ${cls.rowSecond}`}>
                <Card className={classes.root}>
                  <a href={item.link} target="_blank">
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
                      <Typography className={cls.content}>
                        {item.text}
                      </Typography>
                    </CardContent>
                  </a>{" "}
                </Card>
              </Box>
            ))}
          </ReactSlick>
        </Container>
      </div>
    </Zoom>
  );
}

export default trackWindowScroll(Order);
