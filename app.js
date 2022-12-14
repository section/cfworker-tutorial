const express = require('express');
const helloWorld = require('./functions/helloWorld');
const respondWithAnotherSite = require('./functions/respondWithAnotherSite');

const app = express()
const port = process.env.PORT || 3000

// Return small HTML page - https://developers.cloudflare.com/workers/examples/return-html/
app.get('/', async function(req, res) {
  res.send(await helloWorld())
})

// Respond with another site - https://developers.cloudflare.com/workers/examples/respond-with-another-site/
app.get('/section', async function(req, res) {
  res.send(await respondWithAnotherSite())
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
