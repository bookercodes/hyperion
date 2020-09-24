import Head from 'next/head'
import { fetchNotionPage } from "../notion-client"
import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetchNotionPage()
  console.log(data)
  return { props: { blockMap: data } }
}

export default function Home({ blockMap }) {
  return (
    <div className="container" style={{
      maxWidth: 708,
      margin: "0 auto",
      padding: "0 8px",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
    }}>
      <Head>
        <title>Hyperion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NotionRenderer blockMap={blockMap} />
      </main>
    </div>
  )
}
