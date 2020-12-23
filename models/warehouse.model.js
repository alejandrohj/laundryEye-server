const {Schema, model} = require('mongoose');

const warehouseSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  floor:{
    type: String,
    required: true
  },
  stock: [{
    _id:false,
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'item'
    },
    quantity: Number
  }]

})

module.exports = model('warehouse', warehouseSchema)