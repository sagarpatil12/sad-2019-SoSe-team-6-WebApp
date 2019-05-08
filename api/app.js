var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const JSON = require('circular-json');

//var db = require ('./model/mongo.model.user')
var indexRouter = require("./routes/index");
var testAPIRouter = require("./routes/book");
var Users = require('./routes/Users')
var mongoose = require("mongoose");
var app = express();
//GRidfsDep
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
      extended: false
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);
app.use(testAPIRouter);
app.use(Users);

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
    
const mongoURI = 'mongodb+srv://myUser0:mongo1234@mycluster-rc5ys.mongodb.net/ReadersPointDB?retryWrites=true';
//const mongoURI ='mongodb://localhost:27017/ReadersPointDB'
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

// Create mongo connection
var conn = mongoose.connection;

// Init gfs

Grid.mongo=mongoose.mongo;
conn.once('open', () => {
  // Init stream
 var gfs = Grid(conn.db);
 // gfs.collection('uploads');
  app.set('gfs',gfs)
});

app.set('JSON',JSON)

module.exports = app;
