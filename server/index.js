const express = require("express")
require("dotenv").config()
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express()
const port = process.env.port || 5500

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`server is listing on ${port} port`)
})

app.get("/api/:id", (req, res) => {
  debugger
  const { url } = req
  const date = url.split("api/")
  if (url.includes("-")) {
    res.json({ unix: Date.parse(date[1]), utc: date[1] }).status(304)
  }
  else {
    res.json({ unix: date[1], utc: new Date(parseInt(date[1])).toUTCString() }).status(304)
  }
})

app.get("/", (req, res) => {
  res.send("server alive hellow world")
})
