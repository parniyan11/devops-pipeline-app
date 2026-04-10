const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to DevOps Pipeline');
});

module.exports = app;