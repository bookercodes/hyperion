// const fetch =require("node-fetch")

// async function fetchNotionPage(notionPageId) {
//     return fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`).then(res => res.json())
// }

// async function fetchTable(notionPageId) {
//     return fetch(`https://notion-api.splitbee.io/v1/table/${notionPageId}`).then(res => res.json())
// }

// const database = { }

// // const x = { }
// // x.fetchAllPages({ limit: 3})
// // may as well use flat object?  can support a few hundered pages, no problem

// notion.fetchAllPages() // fetch all pages to populate getStaticPaths
// notion.fetchPage() // given a slug, return me the page metadata and body
// notion.fetchTable()

// const pages = [] 
// // /
// // /about
// //   heading
// //   published
// // /home
// //   heading
// //   published
// // /contact
// //   heading
// //   published
// // /posts/1
// //   heading
// //   published
// // /posts/2
// //   heading
// //   published
// // /posts/3
// //   heading
// //   published
// // /projects/1
// //   heading
// //   published
// // /projects/2
// //   heading
// //   published
// // /projects/3
// //   heading
// //   published


// const notion = {
//     _data: { },
//     createSitemap({ tableId }) {
//         const table =  fetchTable(tableId)
//         // 

//         this._data.pages = {
//             "about": { title: "About", notionPageId: "123" },
//             "contact": { title: "Contact", notionPageId: "1234" },
//             "posts/some-post": { title: "Some post", notionPageId: "xxx" },
//         }
//     }
// }

// async function main() {
//     const siteMapTableId = "18c4243a8cf0471997851a12e43aac97"
//     const sitemap = await fetchTable(siteMapTableId)
//     console.log(sitemap)
// }
// main()

async function main() {
    const NotionClient = require("./notion-site")
    const notionClient = await NotionClient({ id: "18c4243a8cf0471997851a12e43aac97" })
    const paths = notionClient.paths()
    console.log("paths", paths)
}
main()