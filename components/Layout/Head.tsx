import Head from "next/head";
import { TLang } from ".";
import { SEO_EN, SEO_KR } from "../../constants/seo";

export type TSeo = {
  title?: string;
  desc?: string;
  keywords?: string;
  image?: string;
};

export default function HeadLayout({ seo, lang }: { seo: TSeo; lang: TLang }) {
  const SEO = lang == "ko" ? SEO_KR : SEO_EN;
  return (
    <Head>
      <title>{seo.title ? seo.title : SEO.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="keywords"
        content={seo.keywords ? seo.keywords : SEO.keywords}
      />
      <meta name="description" content={seo.desc ? seo.desc : SEO.desc} />
      <meta property="og:site_name" content={SEO.siteName} />
      <meta property="og:title" content={seo.title ? seo.title : SEO.title} />
      <meta property="og:url" content={SEO.url} />
      <meta
        property="og:description"
        content={seo.desc ? seo.desc : SEO.desc}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image ? seo.image : SEO.image} />
      <meta property="og:locale" content={lang == "ko" ? "ko_KR" : "en_US"} />
      {/* <meta name="theme-color" content="" /> */}
      <link rel="shortcut icon" href="/static/icons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icons/favicon-32x32.png"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8483661130481553"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
