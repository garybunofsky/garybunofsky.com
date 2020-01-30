const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/garybunofsky/Documents/projects/site/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/garybunofsky/Documents/projects/site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/garybunofsky/Documents/projects/site/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/garybunofsky/Documents/projects/site/src/pages/index.js")))
}

