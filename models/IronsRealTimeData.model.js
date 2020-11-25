const {Schema, model} = require('mongoose');

const IronsProductivityDataSchema = new Schema(
  {
     status: {
       type: String,
       enum: ['operating','waiting','non-operating','emergency','off']
     },
     iron: Number,
     productivity: {
       program: Number,
       speed: Number,
       temperature: Number,
       productionPost1: Number,
       productionPost2: Number,
       productionPost3: Number
     },
     count: Number
  },
  {
    timestamps: true
  }
);
module.exports = model('IronsProductivityData', IronsProductivityDataSchema);