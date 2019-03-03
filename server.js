var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
const multer = require('multer');
var methodOverride = require('method-override');
const bodyParser = require('body-parser');
var middleware = require('middleware');
var createError = require('http-errors');



require('dotenv').config();

var app = express();

require('./config/database');
require('./config/passport');
require('./config/cloudinary');

var indexRouter = require('./routes/index');
var uploadRouter = require('./routes/upload');
var feedRouter = require('./routes/feed');
var likesRouter = require('./routes/likes');
var editprofileRouter = require('./routes/editprofile');
var profileRouter = require('./routes/profile');
var searchRouter = require('./routes/search');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'WDIRocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/feed', feedRouter);
app.use('/editprofile', editprofileRouter);
app.use('/likes', likesRouter);
app.use('/upload', uploadRouter);
app.use('/search', searchRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;