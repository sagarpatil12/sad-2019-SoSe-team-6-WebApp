const mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/test?retryWrites=true')

const chunkSchema = new mongoose.Schema({
  file_id:String,
  bchunk_number:String,
  data:Buffer
})

module.exports=mongoose.model('imagedata.chunk',chunkSchema)