import { Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import cls from "./Strategy.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import DialogStrategy from "./DialogStrategy";

export default function Strategy() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls.root}>
          <Container className={cls.container}>
            <Fade center>
              <Box className={cls.row}>
                <Box className={cls.colFirst} container>
                  <div className={cls.left}>
                    <h2>{t("strategy title")}</h2>
                    <span></span>
                  </div>
                  <div className={cls.right}>
                    <img
                      className={cls.rightIcon}
                      src="images/newDesign/arrowRight.svg"
                      alt="arrowRight"
                    />
                    <div className={cls.calculate} onClick={handleOpen}>
                      <p className={cls.rightTitle}>
                        {t("strategy calculate")}
                      </p>
                      <img src="images/icons/leftArrow.svg" alt="leftArrow" />
                    </div>
                  </div>
                </Box>
                <Box className={cls.colSecond}>
                  <div className={cls.card}>
                    <div>
                      <h3 className={cls.title}>
                        {t("price_first_investment")}
                      </h3>
                      <p className={cls.content}>{t("strategy_content_1")}</p>
                    </div>
                    <div>
                      <h3 className={cls.title}>{t("20-30%")}</h3>
                      <p className={cls.content}>{t("strategy_content_2")}</p>
                    </div>
                    <div>
                      <h3 className={cls.title}>{t("every_month_percent")}</h3>
                      <p className={cls.content}>{t("strategy_content_3")}</p>
                    </div>
                  </div>
                  <div className={cls.card}>
                    <div>
                      <h3 className={cls.title}>{t("from_hundred")}</h3>
                      <p className={cls.content}>{t("strategy_content_4")}</p>
                    </div>
                    <div>
                      <h3 className={cls.title}>{t("every_three_month")}</h3>
                      <p className={cls.content}>{t("strategy_content_5")}</p>
                    </div>
                    <div>
                      <h3 className={cls.title}>{t("unlimited")}</h3>
                      <p className={cls.content}>{t("strategy_content_6")}</p>
                    </div>
                  </div>
                </Box>
                <div className={cls.arrowRightWrapper}>
                  <div className={cls.arrowRight}>
                    <img
                      className={cls.arrowRightImg}
                      src="images/newDesign/arrowRight.svg"
                      alt="arrowRight"
                    />
                    <div className={cls.arrowCalculate} onClick={handleOpen}>
                      <p>{t("strategy calculate")}</p>
                      <img src="images/icons/leftArrow.svg" alt="leftArrow" />
                    </div>
                  </div>
                </div>
              </Box>
            </Fade>
          </Container>
        </div>
        {/* <div className={cls.rootSecond}>
          <Container>
            <Fade center>
              <div className={cls.content}>
                <h2>{t("26 ???????? 3 ???????? 26 ?????????? 5 ??????")}</h2>
                <p>
                  {t(
                    "?????????? ???????????????????? ???????????? ???? 16 ?????? 2022. \n" +
                      "?????????????? ?????????????????? ???????? ???????????? ?? ?????????????? ?????????????? ???????????? ????????????????????."
                  )}
                </p>
              </div>
            </Fade>
          </Container>
        </div> */}
      </div>
      <DialogStrategy open={open} handleClose={handleClose} />
    </>
  );
}
