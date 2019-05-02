var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
//var db = require ('./model/mongo.model.user')
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var mongoose = require("mongoose");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const database='ReadersPointDB'
const server='mycluster-rc5ys.mongodb.net'
const user='myUser0'
const password='mongo1234'

mongoose.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/ReadersPointDB?retryWrites=true',function(err){
    if(err){
        console.log(err+' CANT CONNECT')

    }
    else{
        console.log('Database Found')
    }
})
// db.connect('mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/test?retryWrites=true', function(err) {
//   if (err) {
//     console.log('Unable to connect to Mongo.')
//     process.exit(1)
//   } else {
//     app.listen(3000, function() {
//       console.log('Listening on port 3000...')
//     })
//   }
// })

module.exports = app;
