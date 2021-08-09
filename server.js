const express = require('express');
const { resolve } = require('path');

require('dotenv').config();

const app = express();

app.use('/',
  express.static(resolve(__dirname, './build'))
);

app
  .listen(process.env.PORT || 3000, (err) => {
    if (err) { 
      return console.log(err);
    }
    console.log('Deployment has been completed')
    console.log(process.env.REACT_APP_API_URL)
  })