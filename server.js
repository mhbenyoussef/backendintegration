const db = require("./db/db")
const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000


app.use(cors())
app.use(express.json())
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})



db.connectToDb();
