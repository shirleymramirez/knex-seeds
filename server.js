const env = process.env.NODE_ENV || 'development';
const express = require('express');
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json());



app.listen(port, () => {
    console.log("Listening on port ", port);
})
