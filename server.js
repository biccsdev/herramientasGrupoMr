const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

//Adding the bodyParser middelware to the express app, for routing
app.use(bodyParser.urlencoded({ extended: false }));

//Redirecting traffic from '/' to ./routes for following
// up the rest of the route
app.use('/', require('./routes'));

app.use(express.static(__dirname + '/reporteArticulo/views/'));

app.listen(port, () => {
    console.log(`-  Server Listening on port: ${port} --`)
})