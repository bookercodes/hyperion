import Head from "next/head"
import {fetchTable} from "../../notion-client"

export async function getStaticProps() {
  const data = await fetchTable("81de3841c28b419a8d35ee374b939161")
  return { props: { blockMap: data } }
}

export default function Home({ blockMap }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Posts</h1>
        <ul>
          {blockMap.map(block => <li>{block.Heading}</li>)}
        </ul>
      </main>
    </div>
  )
}
