const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
UserSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
      const document = this;
      bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
        if (err) {
          next(err);
        } else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });
  
  UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }
module.exports = User = mongoose.model('users', UserSchema)