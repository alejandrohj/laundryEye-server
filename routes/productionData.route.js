const express = require('express');
const router  = express.Router();

let IronsProductivityDataSchema = require('../models/IronsRealTimeData.model');
let TunelCageWasher = require('../models/CartsWasherRTData.model');
let BoilersDataSchema = require('../models/boilerOilData.model');
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
  IronsProductivityDataSchema.create({status, iron, productivity, count: Count})
    .then((data)=>{
      res.status(200).json(data)
      Count = Count +1;
      console.log("cuenta",Count)
      if(Count == 500){
        TunelCageWasher.deleteMany({})
        .then((cartsWasherData)=>{
          IronsProductivityDataSchema.deleteMany({})
          .then((ironsData)=>{
            Count = 0; 
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

router.post('/boilers/daily/data/add',(req,res)=>{
  const {boilerData1,boilerData2, boilerData3} = req.body;
  let now = new Date();
  let hour = now.getHours();
  console.log(hour,"maybesend");
  // if(hour==20){
    console.log("saving boiling data", req.body);
    BoilersDataSchema.create({boilersData:[{boilerData1,boilerData2,boilerData3}], fecha:now})
    .then((resp)=>{
      console.log("boiling data saved succesfully");
       res.status(200).json("")
     })
    // }
  // else{res.status(200).json("")}
})

router.get('/boilers/cdata/all', (req,res)=>{
  let hoy = new Date();
  let MesFixed = new Date(`${hoy.getMonth()+1}-01-${hoy.getFullYear()}`)
  BoilersDataSchema.find({fecha:{$gte:MesFixed}})
  .then((boildataResp)=>{
    res.status(200).json(boildataResp)
  })
})

module.exports = router;
