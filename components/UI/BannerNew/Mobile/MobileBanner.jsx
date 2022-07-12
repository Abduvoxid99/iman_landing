import React, { Suspense, useState } from "react";
import { CheckCircle, AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import cls from "./MobileBanner.module.scss";
import { useTranslation } from "next-i18next";
import SecondPage from "./SecondPage";
import { aims } from "./data";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiButton-root": {
      cursor: "pointer",
    },
  },
}));

export default function MobileBanner() {
  const { t } = useTranslation("common");
  const [state, setState] = useState(false);
  const [aim, setAim] = useState("");
  const [checkedIndex, setCheckedIndex] = useState(null);
  const classes = useStyles();

  switch (true) {
    case state:
      return <SecondPage aim={aim} setAim={setAim} setState={setState} />;
    default:
      return (
        <div className={`${cls.root} ${classes.root}`}>
          <div className={cls.Mobile}>
            <div className={cls.firstPage}>
              <h3 className={cls.title}>{t("why_do_you_invest")}</h3>
              <p className={cls.content}>{t("your_progress")}</p>
              <div className={cls.wrapperAims}>
                <div
                  className={cls.aimItem}
                  onClick={() => {
                    setAim("home");
                    setState(true);
                  }}
                >
                  <div className={cls.aimIcon}>
                    <AddCircle />
                  </div>
                  <p className={cls.aimTitle}>{t("add_aim")}</p>
                </div>
                {aims.map((item, index) => (
                  <div
                    key={index}
                    className={`${cls.aimItem} ${
                      index === checkedIndex && cls.aimItemCheked
                    }`}
                    onClick={() => {
                      setCheckedIndex(index);
                      setAim(item.name);
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "25px" }}
                    />
                    <p className={cls.aimTitle}>{t(item.name)}</p>
                    {index === checkedIndex && (
                      <CheckCircle className={cls.iconCheck} />
                    )}
                  </div>
                ))}
              </div>
              <Button
                disabled={checkedIndex === null}
                onClick={() => {
                  setState(true);
                }}
                className={`${cls.btn} ${
                  checkedIndex !== null && cls.activeBtn
                }`}
              >
                {t("next")}
              </Button>
            </div>
          </div>
        </div>
      );
  }
}
