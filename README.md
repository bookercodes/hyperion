# Hyperion

## Pages

* `/` (portfolio)
* `/about`
* `/posts`
* `/posts/[postId]`


## Implementation notes
* Notion
  * Pages table (homepage, about, and any other pages you'd like)
  * Posts table (all posts)
* `/`
  * Pull page and metadata (title and  description) from Notion table as defined by `config.notionDatabaseId`
  * Pull `/` from pages table
  * Query `notion-api-worker`
  * Render using `react-notion`
  * Will need a vanilla primary navigation
    * Logo
    * Highlight current selection
    * Populate menu items dynamically per _pages table_
