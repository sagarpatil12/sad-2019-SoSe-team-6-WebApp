var express = require("express");
var router = express.Router();
// var book_model = require ('../model/mongo.model.book')

//API to get details of book
// router.get("/book", function(req, res, next) {
//  book_model.find(function(err,resp){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.json(resp)
//         }
//     })
// });
router.get("/book/:filename", function(req, res, next) {
    
    var gfs_var = req.app.get('gfs');    
    gfs_var.collection('filedata');
          /** First check if file exists */
          gfs_var.files.find({filename: req.params.filename}).toArray(function(err, files){
            if(!files || files.length === 0){
                return res.status(404).json({
                    responseCode: 1,
                    responseMessage: "error"
                });
            }
             /** create read stream */
            var readstream = gfs_var.createReadStream({
                filename: files[0].filename,
                root: "filedata"
            });

         return readstream.pipe(res);
      });
    })

module.exports = router;
