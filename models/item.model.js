const {Schema, model} = require('mongoose');

const itemSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['repuesto','consumible']
  },
  subcategory:{
    type: String,
    enum: ['electrico','mecanico','correa','protección']
  },
  commentary: String,
  price: Number

})

module.exports = model('item', itemSchema)