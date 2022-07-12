import React from "react";
import FAQ from "../components/UI/FAQ/FAQ";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import dataRU from "../utils/faqModules/ru.json";
import dataUZ from "../utils/faqModules/uz.json";

export default function Question({ data }) {
  return <FAQ data={data} />;
}

export async function getStaticProps({ locale }) {
  const data = locale === "uz" ? dataUZ : dataRU;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      data,
    },
  };
}
