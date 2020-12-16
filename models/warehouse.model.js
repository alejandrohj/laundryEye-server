const {Schema, model} = require('mongoose');

const warehouseSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  floor:{
    type: String,
    required: true
  },
  stock: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'items'
    },
    quantity: Number
  }]

})

module.exports = model('warehouse', warehouseSchema)