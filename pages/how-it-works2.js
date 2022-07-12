import HowItWorks from "../components/UI/HowItWorks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

export default function howitworks2() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#fbfbfe" }}>
      <HowItWorks />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
