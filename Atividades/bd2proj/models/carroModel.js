const sequelize = require("sequelize");
const db = require("../config/database");
const Categoria = require('./categoria');

var Carro = db.define(
    "carro",
    {
        id: { 
            type: sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        nome: { type: sequelize.STRING, allowNull: false },
        cor: { type: sequelize.STRING, allowNull: false },
        modelo: { type: sequelize.STRING, allowNull: false },
        ano: { type: sequelize.INTEGER, allowNull: false },
        categoriaId: { 
            type: sequelize.INTEGER,
            references: {
                model: Categoria, 
                key: 'id'
            }
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

// Associações
Carro.belongsTo(Categoria, { foreignKey: 'categoriaId' }); 
Categoria.hasMany(Carro, { foreignKey: 'categoriaId' });  

module.exports = Carro;
