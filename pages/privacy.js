import React from "react";
import PrivacyPolicy from "../components/UI/PrivacyPolicy/PrivacyPolicy";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

export default function Privacy() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <PrivacyPolicy />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["common", "privacy"],
      nextI18NextConfig
    )),
  },
});
