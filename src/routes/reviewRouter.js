const { Router } = require('express');
const Review = require('../models/review');
const book = require('../models/book');
const auth = require('../middleware/authMiddleware');



const reviewRouter = Router();

reviewRouter.get("/:id", async (req, res) => {
   try {
       const review = await Review.findById(req.params.id).populate('customer');
       if (!review) {
           return res.status(404).json({ msg: "Review not found" });
       }
       res.json({ review });
   } catch (err) {
       console.error(err);
       res.status(500).send("Server error");
   }
});

//reviewRouter.get("/:id", async (req, res)=>{
//
//    try{
//       
//     }catch(err){
//        console.log(err);
//        res.status(500).send("server error");
//     } 
//     
//})
//
//
//reviewRouter.post("/", role(["admin"]),async (req, res)=>{
//
//    try{
//
//       
//     }catch(err){
//        console.log(err);
//        res.status(500).send("server error");
//     } 
//
//})
//
module.exports = reviewRouter;