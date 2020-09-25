import { useRouter } from 'next/router'
import NotionSite from "../notion-site"
import { fetchNotionPage } from "../notion-client"

import { NotionRenderer } from "react-notion";


export async function getStaticPaths() {
    const notionSite = await NotionSite({ id: "18c4243a8cf0471997851a12e43aac97" })
    const pathsFromNotion = notionSite
        .paths()
        .filter(path => path !== "/")
    const paths = pathsFromNotion.map(path => {
        const importantPart = path.split("/")[1]
        return {
            params: {
                path: [importantPart]
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}


// seems like this isn't invoked for / due to the way it's referenced from index.js
export async function getStaticProps({ params }) {
    const notionSite = await NotionSite({ id: "18c4243a8cf0471997851a12e43aac97" })
    console.log("params", params)
    const x = notionSite.getData("/" + params.path)
    const blockMap = await fetchNotionPage(x.id)

    return {
        props: {
            path: params.path,
            x,
            blockMap
        },
    };
}

const Page = ({x, blockMap}) => {

    const router = useRouter()
    let path = router.query.path || []
    if (path.length < 1)
        path = ['/']

    return (
        <>
        <h1>Any</h1>
            {/* <h1>{x.Heading}, (published={x.Published.toString()})</h1> */}
            {/* <NotionRenderer blockMap={blockMap} /> */}
        </>
    )
}

export default Page