// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://******:*******@cluster0-vlxcn.mongodb.net/test?retryWrites=true');
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;

/*
let swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
*/
// Use Api routes in the App
app.use('/api/v1', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`);
});