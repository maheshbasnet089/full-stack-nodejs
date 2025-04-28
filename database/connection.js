
// hami yaha database connection ko code/logic lekxam
const {Sequelize} =  require("sequelize")
// 

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(process.env.HELLO)


sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" + err)
})

// const db  = {}
// db.Sequelize = Sequelize 
// db.sequelize = sequelize

// module.exports = db
//testtt




