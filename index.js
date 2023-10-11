const express = require('express')
const app = express()

const port = 3002
app.use(express.json())

app.listen(port, ()=>{
    console.log("knock knock knock knock")
})

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

app.get('/pizzas',(req, res)=>{
    res.send(pizzas)
})
app.get('/pizzas/:name', (req, res)=>{

    const  { name }  = req.params


    const pizza = pizzas.find((p)=> p.name === name )
    console.log(pizza)
    res.send(pizza)

})

app.post('/pizzas/new',(req, res)=>{

    let pizza = {}
    pizza.id = Math.max(...pizzas.map(pizz=>pizz.id))+1

    let {...pizzaRecue} = req.body

    Object.assign(pizza,pizzaRecue)

    pizzas.push(pizza)
    res.send(pizzas)

})




app.get('/hello',(req, res)=>{
    res.send('salut')
})
app.post('/bonjour',(req, res)=>{
    console.log('un truc a été posté ici :')
    console.log(req.body)
    res.send('ben voila tu as posté')
})
