'use strict';

const express = require('express');
const app = express();
const routes = require('./routes/');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
/////////////////////////////////////////


/////////////////////////////////////////
//Middle ware
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
/////////////////////////////////////////


/////////////////////////////////////////
//Routes
app.use(routes);
/////////////////////////////////////////


/////////////////////////////////////////
app.listen(port, () => console.log(`Listening on port ${port}`));
/////////////////////////////////////////
