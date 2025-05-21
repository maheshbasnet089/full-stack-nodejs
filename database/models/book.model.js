
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
        }, 
        isDeleted : {
            type : DataTypes.STRING, 
            defaultValue : "false"
        }, 
        isDeletedss : {
            type : DataTypes.STRING, 
            defaultValue : "false"
        }
     })
    
     return Book
}
module.exports = bookModel // export default bookModel