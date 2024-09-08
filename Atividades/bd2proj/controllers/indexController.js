const model = require("../models"); 
const controller = {}; 


controller.getAll = async function (req, res) {
    try {
        const userData = await model.carro.findAll({
            include: [{ model: model.categoria }]  
        });

        return res.render("carros", { data: userData });  
    } catch (error) {
        return res.status(500).json({ message: "Erro!", error: error.message });
    }
};

// Exibir o formulário com as categorias
controller.renderCarForm = async function (req, res) {
    try {
        const categories = await model.categoria.findAll(); 
        return res.render("form", { categories }); 
    } catch (error) {
        return res.status(500).json({ message: "Erro!", error: error.message });
    }
};

// Criar novo carro
controller.createNew = async function (req, res) {
    try {
        const data = await model.carro.create({
            nome: req.body.nome,
            cor: req.body.cor,
            modelo: req.body.modelo,
            ano: req.body.ano,
            categoriaId: req.body.categoriaId  
        });
        return res.status(201).json({ message: "Sucesso!", data });
    } catch (error) {
        return res.status(500).json({ message: "Erro!", error: error.message });
    }
};

module.exports = controller; 
