const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
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
  createBy: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user'
},
  commentary: String,
  price: Number
})

module.exports = model('item', itemSchema)