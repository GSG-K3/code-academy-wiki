const path = require('path');
const express = require('express');
const router = require('./controllers');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();
app.use(compression());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
