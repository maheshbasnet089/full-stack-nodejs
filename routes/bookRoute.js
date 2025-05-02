const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/bookController")
 
const router = require("express").Router()

router.route("/").get(fetchBooks).post(addBook)
router.route("/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

// router.get("/books",fetchBooks)
// router.post("/boooks",addBook)
// router.delete("/books",deleteBook) yesari ni milxa garna chai 

module.exports = router





