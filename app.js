const express = require("express") // express require gareko
const bookRoute = require("./routes/bookRoute")
const cors = require("cors")

const app = express() // express lai trigger gareko 
require("./database/connection")

app.use(cors({
    origin : "*"
}))
app.use(express.json())

// let app = require("express")()

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books
app.use("/api/books",bookRoute)


app.listen(4000, function () {
    console.log("project/server/backend has started at port 4000")
})