const mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/test?retryWrites=true')

const bookSchema = new mongoose.Schema({
  book_id:String,
  book_name:String,
  cover_url:String
})

module.exports=mongoose.model('book',bookSchema)