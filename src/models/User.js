const sequalize = require("../utils/connection")
const {DataTypes} = require("sequelize")


const User = sequalize.define("user", {

    firstName: {

        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {

        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    birthday: {

        type: DataTypes.STRING,
        
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false

    }


})

module.exports = User