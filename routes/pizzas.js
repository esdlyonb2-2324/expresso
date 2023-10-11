const { Router } = require ('express')
const router = Router()
const Pizza = require('../models/Pizza')

const pizzas = [
    {
        id:1,
        name: "trois fromages",
        price: 13
    },
    {
        id:2,
        name: "reine",
        price: 12
    },
    {
        id:3,
        name: "margherita",
        price: 10
    }

]

router.get('/',(req, res)=>{
    res.send(pizzas)
})
router.get('/:name', (req, res)=>{

    const  { name }  = req.params


    const pizza = pizzas.find((p)=> p.name === name )
    console.log(pizza)
    res.send(pizza)

})

router.post('/new',(req, res)=>{

    let pizza = {}
    pizza.id = Math.max(...pizzas.map(pizz=>pizz.id))+1

    let {...pizzaRecue} = req.body

    Object.assign(pizza,pizzaRecue)

    pizzas.push(pizza)
    res.send(pizzas)

})
router.post('/add',(req, res)=>{

    let { ...pizzaParams} = req.body

    let newPizza = Pizza.create(...pizzaParams)
    res.sendStatus(201)
})

module.exports = router