import React from "react";
import cls from "./LastNews.module.scss";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { useTranslation } from "next-i18next";

function New({ data, setGetData }) {
  const { t } = useTranslation("news");
  const { title, day, month, year } = data;

  return (
    <div className={cls.row}>
      <div
        onClick={() => {
          setGetData(data);
        }}
        className={cls.childRow}
      >
        <div className={`object-position ${cls.img}`}>
          <LazyLoadImage src={data.image} alt="Person" effect="blur" />
        </div>
        <div className={cls.bodyNews}>
          <h3>{t(title)}</h3>
          <p>{`${day} ${" "} ${t(month)} ${" "} ${year}`}</p>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(New);
