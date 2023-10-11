const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema({


    name:{
        type: mongoose.SchemaTypes.String
    },
    price: {
        type : mongoose.SchemaTypes.String
    }

})

module.exports = mongoose.model('pizzas', PizzaSchema)