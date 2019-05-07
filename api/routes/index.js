var express = require('express');
var router = express.Router();
var chunk_model = require ('../model/mongo.model.chunk');
//import t from ('typy');

/* GET home page. */
router.get('/Home', function(req, res, next) {
    var gfs_var = req.app.get('gfs');    
    gfs_var.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
          res.send({ files: false });
        } else {
          files.map(file => {
            if (
              file.contentType === 'image/jpeg' ||
              file.contentType === 'image/png'
            ) {
              file.isImage = true;
            } else {
              file.isImage = false;
            }
          });
         res.send({ file: files });
        }
      });
});

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
