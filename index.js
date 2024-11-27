const express = require('express')
const app = express()
const port = "2048"

const city = "Colorado Springs"
const state = "CO"
const country = "USA"
const slack_id = "U07AD6RKUBW"
const extra = "First ever api for me 😁!"

app.get('/', (req, res) => {
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
