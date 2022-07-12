import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import cls from "./ProcessNew.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";
import { marquee, images } from "./marqueData";

const LinkAppStore =
  "https://apps.apple.com/us/app/iman-investor/id1572636618  ";
const LinkGooglePlay =
  "https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US";

export default function ProcessNew() {
  const { t } = useTranslation("common");
  const [device, setDevice] = useState("");
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      setDevice("android");
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      setDevice("ios");
    }
  }, []);

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Box className={cls.row}>
          <Fade left>
            <Box className={cls.col} container spacing={6}>
              <div className={cls.left}>
                <h2>1.</h2>
                <Typography
                  className={cls.title}
                  dangerouslySetInnerHTML={{ __html: t("step 1 description") }}
                ></Typography>
              </div>
              <div className={cls.rightFirst}>
                <div className={cls.brands}>
                  <img src="images/icons/ios.svg" alt="ios" />
                  <img src="images/icons/android.svg" alt="android" />
                </div>
                <img
                  className={cls.qrDesktop}
                  src="images/newDesign/frameQr.svg"
                  alt="qrcode"
                />
                <a
                  href={device === "ios" ? LinkAppStore : LinkGooglePlay}
                  target="_blank"
                >
                  <img
                    className={cls.qrMobile}
                    src="images/newDesign/qr.svg"
                    alt="qr"
                  />
                </a>

                <p>{t("scan qr code")}</p>
              </div>
            </Box>
          </Fade>
          <Fade right>
            <Box className={cls.col}>
              <div className={cls.left}>
                <h2>2.</h2>
                <Typography
                  className={cls.title}
                  dangerouslySetInnerHTML={{ __html: t("step 2 description") }}
                ></Typography>
              </div>
              <div className={cls.rightSecond}>
                {marquee.map((item, index) => (
                  <Marquee
                    pauseOnHover={true}
                    key={index}
                    speed={item.speed}
                    direction={item.direct}
                    gradient={false}
                  >
                    <div className={cls.colSecond}>
                      {images.map((item, index) => (
                        <div key={index + item.name} className={cls.card}>
                          <img
                            className={cls.marqueImg}
                            src={`images/icons/${item.url}`}
                            alt={item.name}
                          />
                          <p className={cls.marqueTitle}>{t(item.name)}</p>
                        </div>
                      ))}
                    </div>
                  </Marquee>
                ))}
              </div>
            </Box>
          </Fade>
          <Fade left>
            <Box className={cls.col}>
              <div className={cls.left}>
                <h2>3.</h2>
                <Typography
                  className={cls.title}
                  dangerouslySetInnerHTML={{ __html: t("step 3 description") }}
                ></Typography>
              </div>
              <div className={cls.rightThird}>
                <img
                  className={cls.image}
                  src="images/newDesign/imgMobile.svg"
                  alt="investment"
                />
              </div>
            </Box>
          </Fade>
        </Box>
      </Container>
    </div>
  );
}
