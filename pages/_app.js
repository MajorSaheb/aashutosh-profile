import Head from "next/head";
import dynamic from "next/dynamic";
import "./globals.scss";

const HomeTemplate = dynamic(
  () => {
    return import("../src/component/templates/HomeTemplate");
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aashutosh Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeTemplate />
    </>
  );
}
