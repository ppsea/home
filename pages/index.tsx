import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>snkim's home</title>
        <meta name="description" content={`snkim's home`} />
      </Head>

      <main>
        <h1>snkim's home</h1>
      </main>

      <footer></footer>
    </div>
  );
}
