const fetch = require("node-fetch")

async function fetchPage({ id }) {
    return fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then(res => res.json())
}

async function fetchTable({ id }) {
    return fetch(`https://notion-api.splitbee.io/v1/table/${id}`).then(res => res.json())
}

module.exports = async function NotionSite({ id }) {

    const pages = { }
    const table = await fetchTable ({ id })

    for (const row of table) {
        pages[row.Path] = {
            ...row
        }
    }

    return {
        paths() {
            return Object.keys(pages)
        },
        getData (path) {
            return pages[path]
        }
    }
}
