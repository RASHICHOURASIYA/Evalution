const { Router } = require('express');
const Review = require('../models/review');
const book = require('../models/book');
const auth = require('../middleware/authMiddleware');



const reviewRouter = Router();

reviewRouter.get("/reviews/:bookId",auth, async (req, res)=>{
    try{
    const books = await Review.find({ book: req.params.bookId}).populate('customer');
    res.send(Review);   
    res.json({books: books});

   
 }catch(err){
    console.log(err);
    res.status(500).send("server error");
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