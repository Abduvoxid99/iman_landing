import React from "react";
import Report from "../components/UI/Report/Report.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

export default function Reports() {
  return (
    <div style={{ paddingTop: "96px" }}>
      <Report />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
    },
  };
}
