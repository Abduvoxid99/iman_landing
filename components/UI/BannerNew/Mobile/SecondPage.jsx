import React, { useState, useEffect } from "react";
import cls from "./MobileBanner.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import Fade from "react-reveal/Fade";
import { useTranslation } from "next-i18next";

import { aims } from "./data";
import { months } from "./months";
import { numberToPrice } from "../../../../utils/numberToPrice";
import Recharts from "../Recharts/Recharts";
import { afterOneMonth, afterTwoMonth } from "../../../../utils/getNextMonth";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function SecondPage({ setState, aim, setAim }) {
  const date = new Date();
  const { t } = useTranslation("common");
  const [values, setValues] = useState({
    initialPrice: null,
    finalPrice: null,
    month: 48,
  });
  const [aimName, setAimName] = useState("");
  const [monthly, setMonthly] = useState(0);
  const [recharts, setRecharts] = useState([]);
  const [checkedMonth, setCheckedMonth] = useState(null);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const data = {
      investor_id: "",
      initial_investment: +(values.initialPrice === null
        ? 5000000
        : values.initialPrice.replace(/\D/g, "")),
      final_amount: +(values.finalPrice === null
        ? 100000000
        : values.finalPrice.replace(/\D/g, "")),
      month_count: +values.month,
    };

    axios
      .post("https://test.system-user.api.iman.uz/v1/financial-plan", data)
      .then((res) => {
        const { data } = res;
        setMonthly(data.monthly_invest);
        setRecharts(data.data);
      })
      .catch((err) => {
        console.log("ERROR: ====> ", err);
      });
  }, [values]);

  return (
    <div className={`${cls.root} ${classes.root}`}>
      <div className={cls.Mobile}>
        <div className={cls.secondPage}>
          <Fade bottom>
            <div className={cls.header}>
              <div className={cls.back} onClick={() => setState(false)}>
                <ArrowBackIosIcon />
              </div>
              <h3 className={cls.headerTitle}>{t("update_aim")}</h3>
            </div>
            <div className={cls.scrollAims}>
              {aims.map((item, index) => (
                <div
                  key={index}
                  className={`${cls.scrollItem} ${
                    (index === checkedIndex || item.name === aim) &&
                    cls.checkedScrollItem
                  }`}
                  onClick={() => {
                    setCheckedIndex(index);
                    setAim(item.name);
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              ))}
            </div>
            <div className={cls.row}>
              <label className={cls.labelInput} htmlFor="nameAim">
                {t("name_aim")}
              </label>
              <input
                id="nameAim"
                value={t(aim)}
                type="text"
                className={cls.currency}
                onChange={(e) => setAimName(e.target.value)}
              />
            </div>
            <div className={cls.row}>
              <label className={cls.labelInput} htmlFor="finalPrice">
                {t("final_price_aim")}
              </label>
              <CurrencyInput
                id="finalPrice"
                className={cls.currency}
                groupSeparator=" "
                defaultValue={"100000000"}
                onChange={(e) => {
                  setValues({ ...values, finalPrice: e.target.value });
                }}
              />
            </div>
            <div className={cls.row}>
              <label className={cls.labelInput}>
                {t("final_price_aim_month")}
              </label>
              <div className={cls.deadlineMonths}>
                {months.map((item, index) => (
                  <div
                    key={index}
                    className={`${cls.month} ${
                      (index === checkedMonth || values.month === item) &&
                      cls.checkedMonth
                    }`}
                    onClick={() => {
                      setValues({ ...values, month: item });
                      setCheckedMonth(index);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={cls.row}>
              <label className={cls.labelInput} htmlFor="initialPrice">
                {t("initial_aim")}
              </label>
              <CurrencyInput
                id="initialPrice"
                className={cls.currency}
                groupSeparator=" "
                defaultValue={"5000000"}
                onChange={(e) => {
                  setValues({ ...values, initialPrice: e.target.value });
                }}
              />
            </div>
            <div className={cls.monthlyInvest}>
              <label className={cls.labelInput} htmlFor="monthlyInvest">
                {t("monthly_aim")}
              </label>
              <input
                className={cls.monthlyInvestInput}
                id="monthlyInvest"
                disabled
                value={numberToPrice(parseInt(monthly))}
                type="text"
                style={{ color: "#000" }}
              />
            </div>
            <div className={cls.recharts}>
              <h3 style={{ marginBottom: "10px" }}>{t("financial_plan")}</h3>
              <div className={cls.monthFinancial}>
                <p className={cls.monthTitle}>{`${t(
                  afterOneMonth()
                )}  ${date.getFullYear()}`}</p>
                <div>
                  <p className={cls.soumFinance}>
                    {`${numberToPrice(parseInt(monthly))} ${t("soum")}`}
                  </p>
                </div>
              </div>
              <div className={cls.monthFinancial}>
                <p className={cls.monthTitle}>{`${t(
                  afterTwoMonth()
                )}  ${date.getFullYear()}`}</p>
                <div>
                  <p className={cls.soumFinance}>
                    {`${numberToPrice(parseInt(monthly))} ${t("soum")}`}
                  </p>
                </div>
              </div>
              <Recharts recharts={recharts} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
