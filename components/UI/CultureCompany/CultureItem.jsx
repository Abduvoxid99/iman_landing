import React from "react";
import cls from "./CultureCompany.module.scss";
import { useTranslation } from "next-i18next";

function Culture({ data, setGetData, index, setActiveCard, activeCard }) {
  const { t } = useTranslation("common");
  return (
    <div
      onClick={() => {
        setGetData(data);
        setActiveCard(data.title);
      }}
      className={cls.card}
    >
      <div
        className={`${cls.cardBody} ${index % 2 == 0 && cls.changeColor} ${
          activeCard === data.title && cls.activeCard
        }`}
      >
        <p className={cls.cardTitle}>{t(data.title)}</p>
        <img
          className={cls.cardIcon}
          src={`images/culture/icons/${data.url}`}
          alt={data.title}
        />
      </div>
    </div>
  );
}

export default Culture;
