const {Schema, model} = require('mongoose');

const IronsProductivityDataSchema = new Schema(
  {
     statusResume: {
       operating: Number,
       waiting: Number,
       nonOperating: Number,
       emergency:Number,
       off: Number
     },
     iron: Number,
     productivityResume: {
       speedAverage: Number,
       temperatureAverage: Number,
       productionPost1Average: Number,
       productionPost2Average: Number,
       productionPost3Average: Number
     }
  },
  {
    timestamps: true
  }
);
module.exports = model('IronsStogeData', IronsProductivityDataSchema);