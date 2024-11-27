const express = require('express')
const app = express()
const port = 3000

const city = "Colorado Springs"
const state = "CO"
const country = "US"
const slack_id = "U07AD6RKUBW"
const extra = "idk what to put here!"

app.get('/api', (req, res) => {
  res.json({
    city,
    state,
    country,
    slack_id,
    extra
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
