const Pizza = require("../models/Pizza");

const createPizza = async function create(req, res){

    let { ...pizzaParams} = req.body

    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}

module.exports('pizzaController',createPizza)