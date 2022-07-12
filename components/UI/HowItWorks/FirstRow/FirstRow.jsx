import { Box, Container } from "@material-ui/core";
import React from "react";
import cls from "./FirstRow.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { useRouter } from "next/router";

import { images } from "./images";
import { titles } from "./titles";

export default function FirstRow() {
  const { t } = useTranslation("common");

  const router = useRouter();

  return (
    <>
      <div className={cls.desktop}>
        <Container className={cls.container}>
          <Fade center>
            <Box className={cls.row}>
              <div className={cls.content}>
                <div className={cls.title}>
                  <h2>{t("How it works?2")}</h2>
                </div>
                <div className={cls.wrapperImages}>
                  {images.map((elm, index) => (
                    <div key={index} className={cls.item}>
                      <Link
                        href={`/how-it-works2#${elm.name}`}
                        locale={router.locale}
                      >
                        <a>
                          <img
                            className={cls.imgClass}
                            src={`/images/how/icons/${elm.url}.svg`}
                            alt={elm.name}
                          />
                          <p className={cls.imgTitle}>{t(elm.name)}</p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </Fade>
        </Container>
      </div>
      <Fade center>
        <div className={cls.mobile}>
          <div className={cls.wrapperBody}>
            <h3>{t("How it works?2")}</h3>
            <div className={cls.wrapperTitles}>
              {titles.map((item, index) => (
                <div key={index} className={cls.mobileTitle}>
                  <div className={cls.number}>{index + 1}</div>
                  <Link
                    href={`/how-it-works2#${item.name}`}
                    locale={router.locale}
                  >
                    <a>
                      <p>{t(item.title)}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
