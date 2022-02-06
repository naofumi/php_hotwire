### Gotchas

#### HTML URLs

src/core/url.ts:26 `function isHTML(url: URL)`
This guesses whether the URL will return HTML based on the URL extension.
Extensions that are considered to be HTML are
1. no extension
2. .html, .htm or .xhtml
This means that if you are using any other extension in your requests, TuboloDrive won't work.

