let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
const config = require('config')
const db = require('./middleware/db-connect')
const urlCons = require('./constants/url-constants')
const restaurantDataRoute = require('./routes/getRestaurantDataRoute')
const insertDataIntoDbRoute = require('./routes/insertDataIntoDbRoute')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(urlCons.PARAM_API_PREFIX, restaurantDataRoute)
app.use(urlCons.PARAM_API_PREFIX, insertDataIntoDbRoute)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;