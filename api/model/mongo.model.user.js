
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/test?retryWrites=true')

const userSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    required:true,
    unique:true
  }
})

module.exports=mongoose.model('User',userSchema)

// var MongoClient = require('mongodb').MongoClient

// var state = {
//   db: null,
// }

// exports.connect = function(url, done) {
//   if (state.db) return done()

//   MongoClient.connect(url, function(err, db) {
//     if (err) return done(err)
    
//     const book_collection = client.db("ReadersPointDB").collection("Book_details");
//     state.db = db

//     done()
//   })
// }

// exports.get = function() {
//   return state.db
// }

// exports.close = function(done) {
//   if (state.db) {
//     state.db.close(function(err, result) {
//       state.db = null
//       state.mode = null
//       done(err)
//     })
//   }
// }