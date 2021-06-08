const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema ({
    pizzaName: {
        type:String
    },

    createdBy: {
        type: String 
    },
    // if no value is provided in this field when the user creates new data, the Date.now function will be executed and will provide a timestap. 
    createdAt: {
        type:Date,
        default: Date.now
    },

    size: {
        type: String,
        default: 'Large'
    }, 

    toppings: []
});


//create the Pizza model using the PizzaSchema
const Pizza = model ('Pizza', PizzaSchema);
//export the Pizza model
module.exports = Pizza;