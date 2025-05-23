const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    // logic to fetch books from database 
    const datas = await books.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "books fetched successfully", 
        datas
    })
}

exports.addBook = async function(req,res){
    // logic to add book to database goes here.. 
    // console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice
    // console.log(req.body, "Frontend aako data hooo")
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
}

exports.deleteBook = async function(req,res){
    // first ma hami, kun book delete garna aatekoho tesko id lim. 
    const id = req.params.id // const {id} = req.params
//    const id = req.body.id 
    // id payisakeypaxi, tyo id ko book chai books table bata udaidim 
    await books.destroy({
        where : {
            id
        }
    }) // delete from books where id = id
    res.json({
      message : "Book Deleted successfully"
    })
}
exports.editBook = async function(req,res){
   try {
     // logic to update book
    // kun id ko chai edit garne tyo id linu paryo . 
    const id = req.params.id
    // k k update garne tw .. 
    const {bookName,price,bookAuthor,bookGenre} = req.body

    await books.update({bookName,price, bookAuthor,bookGenre },{
        where : {
            id : id
        }
    })
    // books.findByIdAndUpdate(id,{})

    res.json({
      message : "Book updated successfully"
    })
   } catch (error) {
    res.json({
        message : "Something went wrong"
    })
   }
}

exports.singleFetchBook = async function(req,res){
    // first capture what id is he/she sending 
    const id = req.params.id // 2
    const datas = await books.findByPk(id) // always returns object, mongoose --> findById
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
        // datass
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai 

