const express = require('express');
const router  = express.Router();

let IronsProductivityDataSchema = require('../models/IronsRealTimeData.model')
let TunelCageWasher = require('../models/CartsWasherRTData.model');
let Count = 0;

/* GET home page */
router.get('/ironsdata', (req, res, next) => {
  IronsProductivityDataSchema.find()
    .then((data)=>{
      console.log(data)
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data found',
        message: err
      })
    })
});

router.post('/irondata/add',(req,res)=>{
  const {status, iron, productivity} = req.body;
  IronsProductivityDataSchema.create({status, iron, productivity})
    .then((data)=>{
      res.status(200).json(data)
      Count = Count +1;
      console.log("cuenta",Count)
      if(Count == 500){
        TunelCageWasher.deleteMany({})
        .then((cartsWasherData)=>{
          IronsProductivityDataSchema.deleteMany({})
          .then((ironsData)=>{
            res.status(200).json(cartsWasherData, ironsData)
          })
        })
        .catch((err)=>{
          res.status(500).json({
            error: 'No data added',
            message: err
          })
    })
      }
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data added',
        message: err
      })
    })
})
router.post('/ironrealtimedata/update',(req,res)=>{
  const {status,iron, productivity} = req.body;

  IronsProductivityDataSchema.updateOne({iron:1},{$set:{productivity, status}})
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data added',
        message: err
      })
    })
})

router.get('/tlc',(req,res)=>{
  TunelCageWasher.find()
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data found',
        message: err
      })
    })
})

router.post('/tlc/add',(req,res)=>{
  console.log(req.body)
  const {status, orders, timeWashing,timeDrying,timeToWash,timeToDry, timeToWashRemoteModifiyed, timeToDryRemoteModifiyed} = req.body;
  TunelCageWasher.create({status,orders,timeWashing, timeDrying, timeToWash, timeToDry, timeToWashRemoteModifiyed, timeToDryRemoteModifiyed})
  .then((data)=>{
    res.status(200).json(data)
  })
  .catch((err)=>{
    res.status(500).json({
      error: 'No data added',
      message: err
    })
  })
})

router.get('/rtdata/delete',(req,res)=>{
  let dateOneHourBefore = new Date();
  TunelCageWasher.deleteMany({})
    .then((cartsWasherData)=>{
      IronsProductivityDataSchema.deleteMany({})
      .then((ironsData)=>{
        res.status(200).json(cartsWasherData, ironsData)
      })
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data added',
        message: err
      })
    })
})

module.exports = router;
