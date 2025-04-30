const express = require("express") // express require gareko
const { books } = require("./database/connection")


const app = express() // express lai trigger gareko 
require("./database/connection")
app.use(express.json())
//test
// let app = require("express")()
app.get("/books",async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "books fetched successfully", 
        datas
    })
})

app.post("/books",async function(req,res){
    // logic to add book to database goes here.. 
    // console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice

    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
    // check if all data aako xa vane only proceed , else not proceed throw error in response
    await books.create({
        bookName,
        price : bookPrice, 
        bookAuthor, 
        bookGenre
         // columName : value
    })
    res.json({
        message : "Book added successfully"
    })
})

app.delete("/books/:id",function(req,res){
    // logic to delete book
    res.json({
      message : "Book Deleted successfully"
    })
})
app.patch("/books/:id",function(req,res){
    // logic to update book
    res.json({
      message : "Book updated successfully"
    })
})

postgresql://postgres.scfmicugsxklxgoyqgar:hahahehehuhu@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(4000, function () {
    console.log("project/server/backend has started at port 4000")
})