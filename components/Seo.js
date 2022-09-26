import Head from "next/head";

export default function Seo({ title }) {
  const titleContent= `${title} | Next Movies `
  return (
    <Head>
      <title>{titleContent}</title>
    </Head>
  );
}
