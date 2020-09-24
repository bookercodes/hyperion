import fetch from "node-fetch"

export async function fetchNotionPage(notionPageId) {
    return fetch("https://notion-api.splitbee.io/v1/page/2e22de6b770e4166be301490f6ffd420").then(res => res.json())
}