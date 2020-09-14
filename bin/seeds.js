require('../configs/database.config');
const mongoose = require('mongoose');

const IronsProductivityData =  require('../models/IronsProductivity.model')

IronsProductivityData.insertMany([
  {
    iron: 1,
     productivity: {
       program: 41,
       speed: 40,
       temperature: 180,
       productionPost1: 20,
       productionPost2: 20,
       productionPost3: 20
     }
  },
  {
    iron: 1,
     productivity: {
       program: 41,
       speed: 40,
       temperature: 180,
       productionPost1: 40,
       productionPost2: 30,
       productionPost3: 60
     }
  }
])
  .then(() =>{
    mongoose.connection.close()
      .then(()=>{
        console.log('Data seeded')
      })
  })


// LaundryModel.insertMany([
//   {
//     category: 'towels',
//     name: 'HandTowel',
//     description: 'basic bathroom handtowel',
//     image: 'https://res.cloudinary.com/dmac7lmms/image/upload/v1598434540/Plaundry/handTowel_dpwyhv.webp',
//     price: 3.50
//   },
//   {
//     category: 'towels',
//     name: 'BathTowel',
//     description: 'basic bathroom towel',
//     image: 'https://res.cloudinary.com/dmac7lmms/image/upload/v1598434656/Plaundry/BathTowel_dyet5x.jpg',
//     price: 5.50
//   },
//   {
//     category: 'clothing',
//     name: 'Shirt',
//     description: 'Basic Shirt',
//     image: 'https://res.cloudinary.com/dmac7lmms/image/upload/v1598434743/Plaundry/shirt_hnc0er.webp',
//     price: 6.50
//   }
// ])
//   .then(() =>{
//     mongoose.connection.close()
//       .then(()=>{
//         console.log('Data seeded')
//       })
//   })
