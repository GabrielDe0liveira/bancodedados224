const model = require("../models"); 
const controller = {};

// Exibir todas as categorias
controller.getAllCategories = async function (req, res) {
    try {
        const categories = await model.categoria.findAll();
        return res.render("categorias", { categories }); 
    } catch (error) {
        return res.status(500).json({ message: "Error!", error: error.message });
    }
};


controller.renderCategoryForm = function (req, res) {
    return res.render("formularioCategoria"); 
};


controller.createCategory = async function (req, res) {
    try {
        const data = await model.categoria.create({
            nome: req.body.nome
        });
        return res.status(201).json({ message: "Sucesso!", data });
    } catch (error) {
        return res.status(500).json({ message: "Erro!", error: error.message });
    }
};

module.exports = controller;
