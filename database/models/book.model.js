
// books, bookName,bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
     const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING, 
            allowNull : false
        }, 
        price : {
            type : DataTypes.INTEGER,
            allowNull : false
        }, 
        bookAuthor : {
            type : DataTypes.STRING,
        }, 
        bookGenre : {
            type : DataTypes.STRING
        }
     })
    
     return Book
}
module.exports = bookModel // export default bookModel