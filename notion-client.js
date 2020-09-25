const fetch = require("node-fetch")

export async function fetchNotionPage(notionPageId) {
    return fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`).then(res => res.json())
}

export async function fetchTable(notionPageId) {
    return fetch(`https://notion-api.splitbee.io/v1/table/${notionPageId}`).then(res => res.json())
}
