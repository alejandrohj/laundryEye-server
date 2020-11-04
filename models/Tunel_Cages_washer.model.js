const {Schema, model} = require('mongoose');

const TunelCagesasherDataSchema = new Schema(
  {
     status: {
       type: String,
       enum: ['operating','washing','drying','off']
     },
     orders: {
       type: String,
       enum: ['none','start','stop']
     },
     timeWashing: Number,
     timeDrying: Number,
     timeToWash: Number,
     timeToDry: Number
  },
  {
    timestamps: true
  }
);
module.exports = model('TunelCagesasherData', TunelCagesasherDataSchema);