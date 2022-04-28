const {Schema, model} = require('mongoose');

const boilerOilDataSchema = new Schema({
  boilerNumber:{
    type: Number,
    required: true,
  },
  oilData:{
    totalConsumption: Number,
    dayConsumption: Number,
    hourConsumption: [Number] //Array de 0 a 23 -> de 00:00 a 23:00
  },
  fecha:Date
})

module.exports = model('boilerData', boilerOilDataSchema)