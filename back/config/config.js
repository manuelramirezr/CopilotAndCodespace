// Create config.js file in back/config/:

// Import dotenv
require('dotenv').config();

// Create config object
const config = {
    port: process.env.PORT,
    db: process.env.DB,
};

// Export config
module.exports = config;
// Create .env file in back/:
