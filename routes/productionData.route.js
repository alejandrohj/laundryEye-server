const express = require('express');
const router  = express.Router();

let IronsProductivityDataSchema = require('../models/IronsProductivity.model')

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

module.exports = router;
