var express = require('express');
var router = express.Router();
var chunk_model = require ('../model/mongo.model.chunk');
//import t from ('typy');

/* GET home page. */
router.get('/Home', function(req, res, next) {
    var gfs_var = req.app.get('gfs');
    gfs_var.collection('filedata');    
    gfs_var.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
          res.send({ files: false });
        } else 
        
         res.send({ file: files });
        
      });
});

//get images from image chunk
 router.get("/bookimg", function(req, res, next) {
   chunk_model.find(function(err,resp){
         if(err){
             console.log(err)             
         }
         else{        
          var  img=[];
          for(i=0;i<resp.length;i++)
          {
            img.push(resp[i].data);
          }
          res.json({img})
         }
     })
 });
 
module.exports = router;
