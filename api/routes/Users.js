const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const withAuth = require('./middleware');
const User = require("../model/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = new User ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    })

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                userData.save(function(err) {
                    if (err) {
                      console.log(err);
                      res.status(500).send("Error registering new user please try again.");
                    } else {
                      res.status(200).send("Welcome");
                    }
                  });
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
          error: 'Incorrect email or password'
        });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
              error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
              error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: '1m'
            });
            res.cookie('token', token, { httpOnly: true }).sendStatus(200);                      
          }
        });
      }
    });
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });

module.exports = users