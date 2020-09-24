const pizzas = require('../database/Pizzas.json')

module.exports = {
    index: (req, res)=>{
        res.render("index",{pizzas});
    },
    show: (req, res) => {

        // capturando a pizza com o id fornecido pela routa
        let pizza = pizzas.find(
            posicaoPizza => posicaoPizza.id == req.params.id
        );

        // retornar a pizza para o usuário
        if(pizza){
            res.render("pizza", {pizza});
        } else {
            res.render("erros/pizzaNaoEncontrada")
        }
    },
    create: (req,res) => {
        // exibir o formulário para o usuário
        res.render("create")
    },
    store: (req ,res) => {
        let pizza = req.body;
        // adicionando imagem e destaque;
        pizza.img = "/img/fracatu.jpg";
        pizza.destaque = true;

        // determinando o id da nova pizza
        let novoId = (pizzas[pizzas.length - 1].id) + 1
        // salvando o id da nova pizza
        pizza.id = novoId;

        // adicionando a pizza cadastrada ao json de pizzas
        pizzas.push(pizza);

        res.redirect('/');
    }
}