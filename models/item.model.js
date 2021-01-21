const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  branch: String,
  ref: {
    type: String,
    unique: true
  },
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
  createBy: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
},
  commentary: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  },
  warehouse: {
    type: Schema.Types.ObjectId,
    ref: 'warehouse'
  }
})

module.exports = model('stockItem', itemSchema)