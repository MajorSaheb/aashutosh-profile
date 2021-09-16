import Head from "next/head";
import "../src/styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aashutosh Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component />
      </main>
    </>
  );
}
