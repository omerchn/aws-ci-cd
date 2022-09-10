const express = require('express')

const app = express()
const port = process.env.PORT || 4000

app.use('/hello', require('./routes/hello'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})