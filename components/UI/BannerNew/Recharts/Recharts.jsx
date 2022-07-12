import React from "react";
import { LineChart, Line, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useTranslation } from "next-i18next";
import cls from "./Recharts.module.scss";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "5px",
          fontSize: "12px",
          boxShadow: "1px 1px 2px lightgray",
        }}
      >
        <p className="label">{`${payload[1].value.toFixed(2)}`} M</p>
        <p className="label">{`${payload[0].value.toFixed(2)}`} M</p>
      </div>
    );
  }

  return null;
};
const toMillion = (decimal, fixed = 0) => {
  if (decimal < 1000) return `${decimal} mln`;
  return `${decimal / 1000} mlrd`;
};

export default function Recharts({ recharts }) {
  const { t } = useTranslation("common");
  const data =
    recharts &&
    recharts?.length > 0 &&
    recharts?.map((item) => ({
      ...item,
      investor_deposit: item.investor_deposit.toFixed(2) / 1000000,
      investor_profit: item.investor_profit.toFixed(2) / 1000000,
    }));
  return (
    <>
      <LineChart
        width={230}
        height={280}
        data={data}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <CartesianGrid vertical={false} strokeDasharray="2" />
        {/* <XAxis dataKey="name" /> */}
        <YAxis
          tickFormatter={toMillion}
          style={{ fontSize: "12px" }}
          tickLine={false}
          axisLine={false}
          orientation="right"
        />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Line
          dot={false}
          type="monotone"
          dataKey="investor_deposit"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          dot={false}
          type="monotone"
          dataKey="investor_profit"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
      <div className={cls.Recharts}>
        <div className={cls.bottomRow}>
          <div className={cls.iconFirst}>
            <div className={cls.iconFirstInner}></div>
          </div>
          <p>{t("green_line")}</p>
        </div>
        <div className={cls.bottomRow}>
          <div className={cls.iconSecond}>
            <div className={cls.iconSecondInner}></div>
          </div>
          <p>{t("blue_line")}</p>
        </div>
      </div>
    </>
  );
}
