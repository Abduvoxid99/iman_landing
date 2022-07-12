import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import cls from "./PrivacyPolicy.module.scss";
import { useTranslation, i19n } from "next-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy");
  return (
    <div className={cls.root}>
      <Container className={cls.container} style={{ maxWidth: "1250px" }}>
        <Box className={cls.box}>
          <div className={cls.row}>
            <Typography className={cls.title}>
              {t("privacy:policy-title")}
            </Typography>
            <Typography className={cls.subTitle}>{t("policy-desc")}</Typography>
            <div className={cls.flex}>
              <Typography className={cls.date}>{t("tashkent-city")}</Typography>
              <Typography className={cls.date}>{t("terms-date")}</Typography>
            </div>
            <div className={cls.terms}>
              <Typography className={cls.title}>
                1. {t("terms-and-definitions")}
              </Typography>
              <Typography className={cls.text}>
                {" "}
                1.1. {t("term-1-1")}
                <br />
                <span>{t("term-1-2")}</span> {t("term-1-3")}
                <a href='https://imaninvest.com'>{t("term-1-4")}</a>,<span className={cls.pTag} dangerouslySetInnerHTML={{__html: `${t("term-1-5")}`}}></span>
                <br />
                <span>{t("term-1-6")}</span>
                {t("term-1-7")}
                <br />
                <span>{t("term-1-8")}</span>
                {t("term-1-9")}
                <br />
                <span>{t("term-1-10")}</span>
                {t("term-1-11")}
                <br />
                <span>{t("term-1-12")}</span>
                {t("term-1-13")}
                <br />
                <span>{t("term-1-14")}</span>
                {t("term-1-15")}
                <br />
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                2. {t("term-2-title")}
              </Typography>
              <Typography className={cls.text}>
                <span className={cls.tab}>2.1. {t("term-2-1")}</span>
                <br />
                <span className={cls.tab}> 2.2. {t("term-2-2")}</span>
                <br />
                <span className={cls.tab}> 2.3. {t("term-2-3")}</span>
                <br />
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                3. {t("term-3-title")}
              </Typography>
              <Typography className={cls.text}>
                {" "}
                3.1. {t("term-3-1")}
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.2 ${t("term-3-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.3 ${t("term-3-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.4 ${t("term-3-4")}`,
                  }}
                ></span>
                <br />
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                4. {t("term-4-title")}
              </Typography>
              <Typography className={cls.text}>
                {" "}
                4.1. {t("term-4-1")}
                <br />
                4.2. {t("term-4-2")}
                <br />
                4.3. {t("term-4-3")}
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.1 ${t("term-4-3-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.2 ${t("term-4-3-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.3 ${t("term-4-3-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.4 ${t("term-4-3-4")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.5 ${t("term-4-3-5")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3.6 ${t("term-4-3-6")}`,
                  }}
                ></span>
                <br />
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                5. {t("term-5-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.1 ${t("term-5-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.2 ${t("term-5-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.3 ${t("term-5-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.4 ${t("term-5-4")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                6. {t("term-6-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `6.1 ${t("term-6-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `6.2 ${t("term-6-2")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                7. {t("term-7-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.1 ${t("term-7-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.2 ${t("term-7-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.3 ${t("term-7-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.4 ${t("term-7-4")}`,
                  }}
                ></span>
                <br />
                
              </Typography>
              <br />
              <br />
              
           <br/><br/><Typography className={cls.lastText}>
            {t("privacy-end")}
          </Typography> 
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
