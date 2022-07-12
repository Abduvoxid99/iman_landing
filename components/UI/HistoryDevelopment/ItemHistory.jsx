import React from "react";
import cls from "./HistoryDevelopment.module.scss";
import { useTranslation } from "next-i18next";

function ItemHistory({ data }) {
  const { t } = useTranslation("common");
  return (
    <div className={cls.col}>
      <div className={cls.card}>
        <div className={cls.left}>
          <h1 className={cls.title}>2022</h1>
        </div>
        <div className={cls.right}>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_1")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_2")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_3")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_4")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_1")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_2")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_3")}</p>
          </div>
          <div className={cls.rightContent}>
            <img src="images/company/icons/check.svg" alt="check" />
            <p>{t("history_step_4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemHistory;
