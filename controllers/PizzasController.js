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
    }
}