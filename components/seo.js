import Head from "next/head";
import { useTranslation, i18n } from "next-i18next";

export default function SEO({ image, keywords }) {
  const { t } = useTranslation("common");

  return (
    <Head>
      <title>{t("IMAN_title")}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={t("IMAN_title")} />
      {/* <meta name='keywords' content={keywords || t('keywords')} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t("IMAN_title")} key="ogtitle" />
      <meta property="og:description" content={t("IMAN_title")} key="ogdesc" />
      <meta property="og:site_name" content="IMAN" key="ogsitename" />
      <meta
        property="og:image"
        content="https://cdn.iman.uz/iman/%D0%BB%D0%BE%D0%B3%D0%BE.png"
        key="ogimage"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={t("IMAN_title")} />
      <meta name="twitter:description" content={t("IMAN_title")} />
      <meta name="twitter:site" content="IMAN" />
      <meta name="twitter:creator" content="Udevs" />
      <meta
        name="twitter:image"
        content="https://cdn.iman.uz/iman/%D0%BB%D0%BE%D0%B3%D0%BE.png"
      />

      <meta
        name="facebook-domain-verification"
        content="j2ig84vr0gpsgb77gwrzusw7anv0g9"
      />

      <link rel="icon" href="/favicon.svg" />

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `window.intercomSettings = {
                                      api_base: "https://api-iam.intercom.io",
                                      app_id: "eonxxw21",
                                      background_color: "#00cbb1",
                                      action_color: "#00cbb1"
                                    };`,
        }}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/eonxxw21'
                (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/eonxxw21';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
        }}
      ></script> */}
    </Head>
  );
}
