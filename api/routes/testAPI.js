var express = require("express");
var router = express.Router();
var book_model = require ('../model/mongo.model.book')

// router.get("/", function(req, res, next) {
// //     res.send("API is working properly");
// //     db.db()
// //     var collection = db.get().collection('Book_details')

// //   collection.find().toArray(function(err, docs) {
// //      res.json({Book_details: docs})
    
//     // res.send('hello')



// });

router.route("/").get((req,res)=>{

    book_model.find(function(err,resp){
        if(err){
            console.log(err)
        }
        else{
            res.json(resp)
            res.send('testAPI get')
        }
    })
});

module.exports = router;
