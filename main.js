const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Noti Test')
})

app.listen(port, () => {
  console.log(`Noti Test Started on ${port}`)
})
