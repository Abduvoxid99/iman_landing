import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import Term from "../components/UI/Term/Term.js";

export default function Terms() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Term />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
