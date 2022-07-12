import { Box, Container } from "@material-ui/core";
import React, { useState } from "react";
import cls from "./OurTeamNew.module.scss";
import ReactSlick from "react-slick";
import { useTranslation } from "next-i18next";
import { ArrowLeft, ArrowRight } from "../SlickCarouselArrows/Arrows";
import Fade from "react-reveal/Fade";
import TeamItem from "./Team";
import TeamDialog from "./TeamDialog";
import { desktopTeam, mobileTeam } from "./data";

export default function OurTeamNew() {
  const { t } = useTranslation("common");
  const [getData, setGetData] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className={cls.root} id="our-team">
      <Box className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <h2 className="g-title">{t("Our team")}</h2>
            <Box className={cls.row}>
              {desktopTeam.map((item, ind) => (
                <TeamItem
                  setGetData={setGetData}
                  setOpen={setOpen}
                  key={ind}
                  data={item}
                />
              ))}
            </Box>
          </Fade>
        </Container>
      </Box>
      <Box className={cls.mobile}>
        <Container className={cls.container}>
          <Fade center>
            <h2 className="g-title">{t("Our team")}</h2>
            <Box className={cls.row}>
              <ReactSlick
                {...{
                  infinite: true,
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        dots: true,
                      },
                    },
                  ],
                  swipeToSlide: true,
                  lazyLoad: true,
                  nextArrow: <ArrowRight styles="nextButtonCustom" />,
                  prevArrow: <ArrowLeft styles="prevButtonCustom" />,
                }}
                className="custom-slider"
              >
                {mobileTeam.map((team, index) => (
                  <div key={index}>
                    <Box className={cls.colMobile}>
                      {team.map((item, i) => (
                        <TeamItem
                          setGetData={setGetData}
                          setOpen={setOpen}
                          key={i}
                          data={item}
                        />
                      ))}
                    </Box>
                  </div>
                ))}
              </ReactSlick>
            </Box>
          </Fade>
        </Container>
      </Box>
      <TeamDialog open={open} setOpen={setOpen} data={getData} />
    </div>
  );
}
