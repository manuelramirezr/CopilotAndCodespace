// Create routes/routes.js

// Import express
const express = require('express');
// Import router
const router = express.Router();
// Import controller
const controller = require('../controllers/controller');

// Routes
router.post('/createUser', controller.createUser);
router.get('/getUsers', controller.getUsers);
router.get('/hello', (req, res) => res.send('Hello world'));


// Export router
module.exports = router;
// Create server.js file in back/:
