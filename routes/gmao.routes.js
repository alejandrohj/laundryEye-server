const express = require('express');
const router  = express.Router();
const Items = require('../models/item.model');
const Warehouses = require('../models/warehouse.model');

router.post('/gmao/warehouses/create',(req,res)=>{
  const {name, floor} = req.body;

  Warehouses.create({name, floor})
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(500).json({
        error: 'No data created',
        message: errxw
      })
    })
})

router.get('/gmao/warehouses',(req,res)=>{
  Warehouses.find()
  .populate({
    path:'stock.itemId'
  })
  .then((data)=>{
    console.log(data)
    res.status(200).json(data)
  })
})

router.post('/gmao/warehouse/:id/update',(req,res)=>{
  const {stock} = req.body;
  console.log(req.params.id,'warehouseId')
  console.log(stock,'items')
  Warehouses.findByIdAndUpdate(req.params.id,{$set:{stock: stock}})
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
  const {name,branch,ref,category,subcategory,unit,commentary,price} = req.body;
  Items.create({name,branch,ref,category,subcategory,unit,commentary,price})
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
 
router.get('/gmao/items',(req,res)=>{
  Items.find()
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

module.exports = router;