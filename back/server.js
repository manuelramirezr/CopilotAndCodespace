// Function nodejs to star api rest with express 

// Import express
const express = require('express');
// Import cors
const cors = require('cors');
// Import body-parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');
// Import routes
const routes = require('./routes/routes');
// Import config
const config = require(process.env.NODE_ENV === 'test' ? './config/test-config' : './config/config');

console.log(config.db);

// Create app express
const app = express();

// Connect to mongodb
// server.js or app.js

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Start server
const server = app.listen(config.port, () => console.log(`Server on port ${config.port}`));

module.exports = server;

// To run test NODE_ENV=test npx mocha