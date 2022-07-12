import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import cls from "./Term.module.scss";
import { useTranslation, i19n } from "next-i18next";

export default function Term() {
  const { t } = useTranslation("common");
  return (
    <div className={cls.root}>
      <Container className={cls.container} style={{ maxWidth: "1250px" }}>
        <Box className={cls.box}>
          <div className={cls.row}>
            <Typography className={cls.title}>{t("policy-title")}</Typography>
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
                <a>{t("term-1-4")}</a>,{t("term-1-5")}
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
                <span>{t("term-1-16")}</span>
                {t("term-1-16-1")}
                <br />
                <span>{t("term-1-17")}</span>
                {t("term-1-17-1")}
                <br />
                <span>{t("term-1-18")}</span>
                {t("term-1-18-1")}
                <br />
                <span>{t("term-1-19")}</span>
                {t("term-1-19-1")}
                <br />
                <span>{t("term-1-20")}</span>
                {t("term-1-20-1")}
                <br />
                <span>{t("term-1-21")}</span>
                {t("term-1-21-1")}
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
                <span className={cls.tab}> 2.4. {t("term-2-4")}</span>
                <br />
                <span className={cls.tab}> 2.5. {t("term-2-5")}</span>
                <br />

                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `2.6. ${t("term-2-6", {
                      interpolation: { escapeValue: false },
                    })}`,
                  }}
                ></span>
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
                    __html: `3.1.1 ${t("term-3-1-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.1.2 ${t("term-3-1-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.1.3 ${t("term-3-1-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.1.4 ${t("term-3-1-4")}`,
                  }}
                ></span>
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
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.5 ${t("term-3-5")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `3.6 ${t("term-3-6")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                4. {t("term-4-title")}
              </Typography>
              <Typography className={cls.text}>
                {" "}
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.1 ${t("term-4-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.2 ${t("term-4-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.3 ${t("term-4-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.4 ${t("term-4-4")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.5 ${t("term-4-5")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.6 ${t("term-4-6")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.7 ${t("term-4-7")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `4.8 ${t("term-4-8")}`,
                  }}
                ></span>
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
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.5 ${t("term-5-5")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.6 ${t("term-5-6")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.7.1 ${t("term-5-7-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `5.7.2 ${t("term-5-7-2")}`,
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
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `6.3 ${t("term-6-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `6.4 ${t("term-6-4")}`,
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
                    __html: `7.1 ${t("term-7-1-title")}`,
                  }}
                ></span>
                <span
                  className={cls.simple}
                  dangerouslySetInnerHTML={{
                    __html: `${t("term-7-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.2 ${t("term-7-2-title")}`,
                  }}
                ></span>
                <span
                  className={cls.simple}
                  dangerouslySetInnerHTML={{
                    __html: `${t("term-7-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.3 ${t("term-7-3-title")}`,
                  }}
                ></span>
                <span
                  className={cls.simple}
                  dangerouslySetInnerHTML={{
                    __html: `${t("term-7-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `7.4 ${t("term-7-4-title")}`,
                  }}
                ></span>
                <span
                  className={cls.simple}
                  dangerouslySetInnerHTML={{
                    __html: `${t("term-7-4")}`,
                  }}
                ></span>
                <br />
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                8. {t("term-8-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.1 ${t("term-8-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.2 ${t("term-8-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.3 ${t("term-8-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.4 ${t("term-8-4")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.5 ${t("term-8-5")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.6 ${t("term-8-6")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `8.7 ${t("term-8-7")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                9. {t("term-9-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `9.1 ${t("term-9-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `9.2 ${t("term-9-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `9.3 ${t("term-9-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `9.4 ${t("term-9-4")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `9.5 ${t("term-9-5")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                10. {t("term-10-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `10.1 ${t("term-10-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `10.2 ${t("term-10-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `10.3 ${t("term-10-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `10.4 ${t("term-10-4")}`,
                  }}
                ></span>
              </Typography>
              <br />
              <br />
              <Typography className={cls.title}>
                11. {t("term-11-title")}
              </Typography>
              <Typography className={cls.text}>
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `11.1 ${t("term-11-1")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `11.2 ${t("term-11-2")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `11.3 ${t("term-11-3")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `11.4 ${t("term-11-4")}`,
                  }}
                ></span>
                <br />
                <span
                  className={cls.tab}
                  dangerouslySetInnerHTML={{
                    __html: `11.5 ${t("term-11-5")}`,
                  }}
                ></span>
              </Typography>
              {/* <br/><br/><Typography className={cls.lastText}>
                {t("privacy-end")}
              </Typography> */}
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
