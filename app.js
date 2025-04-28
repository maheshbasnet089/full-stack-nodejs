const express = require("express") // express require gareko
const app = express() // express lai trigger gareko 
require("./database/connection")
//test
// let app = require("express")()
app.get("/books",function(req,res){
    // logic to fetch books from database 
    res.json({
        message : "books fetched successfully"
    })
})

app.post("/books",function(req,res){
    // logic to add book to database goes here.. 

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