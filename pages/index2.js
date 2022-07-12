import BannerNew from "../components/UI/BannerNew/BannerNew.jsx";
import Content from "../components/UI/Content/Content";
import ProcessNew from "../components/UI/ProcessNew/ProcessNew";
import Strategy from "../components/UI/Strategy/Strategy";
import LastNews from "../components/UI/LastNews/LastNews";
import FaqHome from "../components/UI/FaqHome/FaqHome.jsx";
import nextI18NextConfig from "../next-i18next.config.js";
import Contact from "../components/UI/Contact/Contact.jsx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#fbfbfe" }}>
      <BannerNew />
      <Content />
      <ProcessNew />
      <Strategy />
      <LastNews />
      <FaqHome />
      <Contact />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["common", "news"],
      nextI18NextConfig
    )),
  },
});
