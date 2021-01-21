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
  }
})

module.exports = model('warehouse', warehouseSchema)