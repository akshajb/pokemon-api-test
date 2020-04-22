require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router')
const port = process.env.PORT;

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
    

app.use('/', router);

var server = app.listen(port, function () {
    console.log(`Listening on ${port}`) 
});
