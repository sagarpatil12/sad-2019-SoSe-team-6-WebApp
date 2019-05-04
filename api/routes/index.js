var express = require('express');
var router = express.Router();
var book_model = require ('../model/mongo.model.book')

/* GET home page. */
router.get('/Home', function(req, res, next) {

    var gfs_var = req.app.get('gfs');
    console.log(gfs_var)
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

module.exports = router;
