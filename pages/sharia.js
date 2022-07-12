import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import BannerSharia from "../components/UI/BannerSharia/BannerSharia.jsx";
import HowToNameBlock from "../components/UI/HowToNameBlock/HowToNameBlock.jsx";
import AdviceSharia from "../components/UI/AdviceSharia/AdviceSharia.jsx";
import CertificateSharia from "../components/UI/CertificateSharia/CertificateSharia.jsx";

export default function ShariaCompliances() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#fbfbfe" }}>
      <BannerSharia />
      <HowToNameBlock />
      <AdviceSharia />
      <CertificateSharia />
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
