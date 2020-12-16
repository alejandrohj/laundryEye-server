const express = require('express');
const router  = express.Router();

let Warehouses = require('../models/warehouse.model');
let Items = require('../models/item.model');

router.post('/gmao/warehouses/create',(req,res)=>{
  const {name, floor} = req.body;

  Warehouses.create({name, floor})
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data created',
        message: err
      })
    })
})

router.get('/gmao/warehouses',(req,res)=>{
  Warehouses.find()
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

router.post('/gmao/warehouse/:id/update',(req,res)=>{
  const {name, items} = req.body;
  Warehouses.findByIdAndUpdate(req.params.id,{$set:{name:name,items:items}})
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data created',
        message: err
      })
    })
})

router.post('/gmao/item/create',(req,res)=>{
  const {name,category,subcategory,price,commentary} = req.body;

  Items.create({name,category,subcategory,price,commentary})
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data created',
        message: err
      })
    })
})


module.exports = router;