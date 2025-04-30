
// hami yaha database connection ko code/logic lekxam

const {Sequelize,DataTypes} =  require("sequelize")
// 

// const bookModel = require("./models/book.model")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.eyiwpmteezlquviraela:hahahehehuhu1234@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" +err)
})

const db  = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize

db.books =  require("./models/book.model")(sequelize,DataTypes)




// migrate code ho yo chai hai 
sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai tw 🚀")
})

module.exports = db





