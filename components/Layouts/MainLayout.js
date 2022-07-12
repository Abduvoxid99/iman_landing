import React from "react";
import SEO from "../seo";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import HeaderNew from "../UI/HeaderNew/HeaderNew.jsx";
import FooterNew from "../UI/FooterNew/FooterNew.jsx";
import ConnectBot from "../UI/ConnectBot/ConnectBot";
// import ToContact from "../UI/toContact";
import { useRouter } from "next/router";

function MainLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <SEO />
      {["/index2", "/sharia", "/how-it-works2", "/company"].includes(
        router.pathname
      ) || router.query.hasOwnProperty("test") ? (
        <HeaderNew />
      ) : (
        <Header />
      )}
      {/* <HeaderNew /> */}
      {children}
      {/* <FooterNew /> */}
      {["/index2", "/sharia", "/how-it-works2", "/company"].includes(
        router.pathname
      ) || router.query.hasOwnProperty("test") ? (
        <FooterNew />
      ) : (
        <Footer />
      )}
      {/* <Footer /> */}
      <ConnectBot />
    </>
  );
}

export default MainLayout;
