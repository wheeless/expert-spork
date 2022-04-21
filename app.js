require('dotenv').config();
require('./config/database').connect();
const auth = require('./middleware/auth');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(logger('combined'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/welcome', auth, (req, res) => {
  res.status(200).send('Welcome 🙌 ');
});

console.log(`PORT: ${process.env.PORT}`);

module.exports = app;
