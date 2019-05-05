const mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/test?retryWrites=true')

const chunkSchema = new mongoose.Schema({
  file_id:Object,
  bchunk_number:String,
  data:Buffer
})

module.exports=mongoose.model('uploads.chunk',chunkSchema)