const express= require('express');
const router= express.Router();
const Product = require('./models/product');
const mongoose = require('mongoose');

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests to /products"
    });
});
 
// router.post('/', (req,res,next)=>{
//     const product=new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     });
//     product
//     .save()
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(err=>console.log(err));

//     res.status(201).json({
//         message:"Handling POST requests to /products",
//         createdProduct: product
//     });
// });

router.post("/", (req, res, next) => {

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price
    });

    product
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id : id
        });
    }
    else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});


router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Updated Product',
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message: 'Deleted Product',
    });
});

module.exports=router;