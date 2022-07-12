import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import BannerCompany from "../components/UI/BannerCompany/BannerCompany.jsx";
import ValuesCompany from "../components/UI/ValuesCompany/ValuesCompany.jsx";
import CultureCompany from "../components/UI/CultureCompany/CultureCompany.jsx";
import HistoryDevelopment from "../components/UI/HistoryDevelopment/HistoryDevelopment.jsx";
import PartnersNew from "../components/UI/PartnersNew/PartnersNew.jsx";
import OurTeamNew from "../components/UI/OurTeamNew/OurTeamNew.jsx";
import CareerCompany from "../components/UI/CareerCompany/CareerCompany.jsx";

export default function Company() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#fbfbfe" }}>
      <BannerCompany />
      <ValuesCompany />
      <CultureCompany />
      <HistoryDevelopment />
      <PartnersNew />
      <CareerCompany />
      <OurTeamNew />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
