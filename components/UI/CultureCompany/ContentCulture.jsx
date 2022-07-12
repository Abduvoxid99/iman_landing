import React from "react";
import cls from "./CultureCompany.module.scss";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

function ContentCulture({ data }) {
  const { t } = useTranslation("common");
  const {
    title = "team",
    text1 = "culture about text 1",
    text2 = "culture about text 2",
    img = "/images/culture/culture1.jpg",
  } = data;

  return (
    <>
      <div className={cls.header}>
        <h2>{t(title)}</h2>
      </div>
      <img className={cls.contentImg} src={img} alt={title} />
      <div className={cls.contentBody}>
        <p
          dangerouslySetInnerHTML={{
            __html: t(text1),
          }}
          className={cls.text1}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(text2),
          }}
          className={cls.text2}
        ></p>
      </div>
    </>
  );
}

export default ContentCulture;
