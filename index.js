const express = require('express')
const app = express()
const port = 3002
const pizzaRoutes = require('./routes/pizzas')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{
        console.log('on est bien connectés')
    })
    .catch((err)=>console.log(err))

app.use(express.json())


app.use('/api/pizzas', pizzaRoutes)










app.listen(port, ()=>{
    console.log("knock knock knock knock")
})

app.get('/hello',(req, res)=>{
    res.send('salut')
})
app.post('/bonjour',(req, res)=>{
    console.log('un truc a été posté ici :')
    console.log(req.body)
    res.send('ben voila tu as posté')
})
