const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  branch: String,
  ref: String,
  category: {
    type: String,
    enum: ['repuesto','consumible']
  },
  subcategory:{
    type: String,
    enum: ['electrico','mecanico','correa','protección','filtro']
  },
  unit: {
    type: String,
    enum: ['metros','unidades','litros','kilos']
  },
  provider:{
    type: String
  },
  commentary: String,
  price: Number
})

module.exports = mongoose.model('item', itemSchema)