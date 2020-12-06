var express = require('express');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');


//Routes
var routes = require('./routes/index');

//Init
var app = express();


//Views Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({defaultLayout:'layout.hbs'}));
app.set('view engine', 'hbs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

//Set Port
app.set('port', (process.env.PORT || 5000));

//Listen to port
app.listen( app.get('port'), function () {
    console.log('Server Started at port ' + app.get('port'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
