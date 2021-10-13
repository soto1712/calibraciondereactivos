var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var database =require("./config/database");
var mauth = require("./auth/mauth");
var cors = require('cors');
var reactivosRouter = require('./routes/reactivos.router');
var usuariosRouter = require('./routes/usuario.router');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

//conexion con Mongo db
database.mongoConnect();
app.use('/usuarios',usuariosRouter);
app.use(mauth);
//routes
app.use('/reactivos',reactivosRouter);


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
 // res.render('error');
 // res.send('error');
  res.json(err);
});

module.exports = app;
