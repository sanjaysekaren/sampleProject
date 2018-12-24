const express = require("express")
const bodyParser = require("body-parser")

const app1 = express()
app1.use(bodyParser.json({ type: "*/*" }))
require("./Routes/Route1")(app1);

app1.listen(3500)