import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import CareerAboutTitle from "../components/UI/CareerAboutTitle/CarrerAboutTitle";
import CultureAboutTeam from "../components/UI/CultureAboutTeam/CultureAboutTeam";
import { useTranslation } from "next-i18next";
import CareerAboutTeam from "../components/UI/CareerAboutTeam/CareerAboutTeam.js";

export default function Career() {
  const { t } = useTranslation();
  return (
    <div className="culture-page">
      <CareerAboutTitle />
      <CareerAboutTeam />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
