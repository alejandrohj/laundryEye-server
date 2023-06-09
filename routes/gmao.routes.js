const express = require('express');
const router  = express.Router();
const Items = require('../models/item.model');
const Warehouses = require('../models/warehouse.model');
const TasksModel = require('../models/MaintenanceTask.model');

let Boiler_N3_Temperature;
let Boiler_N2_Temperature;

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
  .then((data)=>{
    console.log(data)
    res.status(200).json(data)
  })
})


router.get('/gmao/warehouse/:id',(req,res)=>{
  Warehouses.find({_id:req.params.id})
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
router.delete('/gmao/:id/warehouse/delete',(req,res)=>{
  console.log('deleting',req.params.id)
  Warehouses.findByIdAndDelete(req.params.id)
    .then((data)=>{
      console.log(data, 'waht')
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
  let createBy = req.session.loggedInUser;
  const {name,branch,ref,category,subcategory,unit,commentary,price, warehouse} = req.body;
  Items.create({name,branch,ref,category,subcategory,unit,commentary,price,createBy: createBy._id, warehouse})
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
router.post('/gmao/item/:id/update',(req,res)=>{
  console.log(req.body)
  let updatedBy = req.session.loggedInUser;
  const {name,branch,ref,category,subcategory,unit,commentary,price,warehouse} = req.body;
  Items.findByIdAndUpdate(req.params.id,{$set:{name,branch,ref,category,subcategory,unit,commentary,price, updatedBy: updatedBy._id, warehouse: warehouse._id}})
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

router.put('/gmao/item/:id/update/quantity',(req,res)=>{
  let updatedBy = req.session.loggedInUser;
  const {quantity} = req.body.itemToUpdate;
  Items.findByIdAndUpdate(req.params.id,{$set:{quantity}})
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

router.delete('/gmao/item/:id/delete',(req,res)=>{
  Items.findByIdAndDelete(req.params.id)
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
  .populate('warehouse')
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
router.get('/gmao/item/:id',(req,res)=>{
  Items.findById({_id:req.params.id})
  .populate('warehouse')
  .populate('createBy')
  .populate('updatedBy')
  .then((data)=>{
    res.status(200).json(data)
  })
})

router.post('/gmao/task/create',(req,res)=>{
  let createBy = req.session.loggedInUser;
  const {taskTitle,taskDescription,subTasks,daily,dayToBeCompleted,hoursToMustBeDone, timeToBeCompleted} = req.body;
  TasksModel.create({taskTitle,taskDescription,subTasks,daily,dayToBeCompleted,hoursToMustBeDone,createBy: createBy._id, timeToBeCompleted})
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

router.put('/gmao/boilers/temperature/update',(req,res)=>{
  const {boilerN3, boilerN2} = req.body;
  Boiler_N3_Temperature = boilerN3;
  Boiler_N2_Temperature = boilerN2;
  res.status(200).json()
})

router.get('/gmao/boilers/temperature',(req,res)=>{
  res.status(200).json([Boiler_N3_Temperature,Boiler_N2_Temperature])
})

module.exports = router;