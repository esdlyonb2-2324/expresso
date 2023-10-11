const Pizza = require("../models/Pizza");

async function createPizza(req, res){

    let { ...pizzaParams} = req.body

    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}

module.exports= {createPizza}