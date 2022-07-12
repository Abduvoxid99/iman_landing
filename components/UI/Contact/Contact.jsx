import { Box, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import cls from "./Contact.module.scss";
import { useTranslation } from "next-i18next";
import DialogContact from "./DialogContact";

const LinkAppStore =
  "https://apps.apple.com/us/app/iman-investor/id1572636618  ";
const LinkGooglePlay =
  "https://play.google.com/store/apps/details?id=udevs.iman_invest&hl=ru&gl=US";

export default function Contact() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={cls.wrapper}>
        <Box className={cls.firstCol}>
          <Container>
            <Box className={cls.contentWrapper}>
              <h3>{t("connect_iman")}</h3>
              <div className={cls.contentRight} onClick={handleOpen}>
                <p>{t("give_questions")}</p>
                <img
                  className={cls.left}
                  src="images/icons/whiteArrow.svg"
                  alt="left"
                />
              </div>
            </Box>
          </Container>
        </Box>
        <div className={cls.secondCol}>
          <Container className={cls.container}>
            <Box className={cls.row}>
              <div className={cls.backImg}>
                <img
                  className={cls.left}
                  src="images/newDesign/54.svg"
                  alt="left"
                />
                <div className={cls.wrapperContent}>
                  <div className={cls.leftContent}>
                    <div>
                      <h2>{t("contact_title")}</h2>
                    </div>
                    <div className={cls.wrapperBtn}>
                      <img src="images/newDesign/mobileQr.svg" alt="mobileQr" />
                    </div>
                  </div>
                  <div className={cls.rightContent}>
                    <img
                      className={cls.mobile}
                      src="images/newDesign/mobile.svg"
                      alt="mobile"
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Container>
        </div>
        <div className={cls.responsive}>
          <div className={cls.responsiveImg}>
            <div className={cls.responsiveBody}>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("contact_title"),
                }}
              ></h2>
              <button type="button" className={cls.responsiveBtn}>
                <a
                  href={device === "ios" ? LinkAppStore : LinkGooglePlay}
                  target="_blank"
                >
                  {t("download_mobile_app")}
                </a>
              </button>
            </div>
          </div>
          <img
            className={cls.leftIcon}
            src="images/icons/leftIcon.svg"
            alt="icons"
          />
          <img
            className={cls.responsiveMobile}
            src="images/newDesign/responsiveMobile.svg"
            alt="icons"
          />
        </div>
      </div>
      <DialogContact open={open} handleClose={handleClose} />
    </>
  );
}
