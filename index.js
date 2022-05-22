const express = require('express')
const app = express()

app.use(express.static('public'));

// Rotas
app.get("/",(req, res) => {
  res.send('Hello World')
})


app.get('/api/:date?', (req, res) => {
  const timestamp = {}
  let date = new Date()

  if(req.params.date)
    date = new Date(req.params.date)

  if(date instanceof Date && !isNaN(date.valueOf())){
    timestamp.unix = date.getTime()
    timestamp.utc = date.toUTCString()
  } else {
    timestamp.error = "Invalid Date"
  }

  res.json(timestamp)
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})