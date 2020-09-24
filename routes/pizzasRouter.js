var express = require('express');
var router = express.Router();
const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);

// mostra o formulário de cadastro de uma pizza
router.get('/pizzas/create', PizzasController.create);

// processa os dados do formulário e salva a nova pizza
router.post('/', PizzasController.store);

// exibe uma pizza em detalhes
router.get('/pizzas/:id', PizzasController.show);

module.exports = router;
