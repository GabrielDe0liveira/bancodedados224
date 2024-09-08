const sequelize = require("sequelize");
const db = require("../config/database");

var Categoria = db.define(
    "categoria",
    {
        id: { 
            type: sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true  
        },
        nome: { type: sequelize.STRING, allowNull: false }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Categoria;