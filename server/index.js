const express = require("express")
require("dotenv").config()

const app = express()
const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`server is listing on ${port} port`)
})

app.get("/", (req, res) => {
  res.send("server alive hellow world")
})
