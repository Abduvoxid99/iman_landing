import React from "react";
import cls from "./OurTeamNew.module.scss";
import { useTranslation } from "next-i18next";

function TeamItem({ data, setGetData, setOpen }) {
  const { t } = useTranslation("common");

  return (
    <div className={cls.col}>
      <div
        onClick={() => {
          setGetData(data);
          setOpen(true);
        }}
        className={cls.card}
      >
        <img
          className={cls.image}
          src={`images/company/team/${data.url}`}
          alt={data.name}
        />
        <div className={cls.cardBody}>
          <p>{t(data.name)}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
