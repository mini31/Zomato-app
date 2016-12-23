var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var user = require('./routes/user');
var User=require('./models/user');
var register=require('./routes/register');
var restaurantDetails = require('./routes/restaurantDetails');

//passport
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var connectflash = require("connect-flash");





//webpack integration
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var compiler = webpack(webpackConfig);



//webpack integration
app.use(webpackDevMiddleware(compiler, {
 publicPath: webpackConfig.output.publicPath,
   stats: {colors: true}, // Same as `output.publicPath` in most cases.
   quiet: true,
   noInfo: true,
   host: '0.0.0.0',
   watchOptions:{
     aggregateTimeout:300,
     poll:1000
   }
}));

app.use(webpackHotMiddleware(compiler, {
   log: console.log,
}))

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());
app.use(require('express-session')({ secret: 'accesskey'}));

//db connect
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurantdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("-------------------------------Connected to MongoDB--------------------");
});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/assets')));


app.use('/user', user);
app.use('/register', register);


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


//authentication using passport
//Passport Require
passport.use(new LocalStrategy(
function(username, password, done) {
  console.log("inside passport");
  User.findOne({ username: username,password:password }, function (err, user) {
    if (err) {
      console.log("passport error");
      return done(err); }
    if (!user) {
      console.log("passport not user");
      return done(null, false); }

    return done(null, user);
  });
}
));

//passport session
passport.serializeUser(function(User, done) {
done(null, User.id);
});

passport.deserializeUser(function(id, done) {
User.findById(id, function (err, User) {
  done(err, User);
});
});




module.exports = app;
