var express = require("express");
var router = express.Router();
var book_model = require ('../model/mongo.model.book')

//API to get details of book
router.get("/book", function(req, res, next) {
 book_model.find(function(err,resp){
        if(err){
            console.log(err)
        }
        else{
            res.json(resp)
           //
           //res.send('testAPI get')
        }
    })
});

module.exports = router;
