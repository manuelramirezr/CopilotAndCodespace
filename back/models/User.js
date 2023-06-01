// Create model.js file in back/models/:

// Import mongoose
const mongoose = require('mongoose');
// Import bcrypt
const bcrypt = require('bcrypt');

// Create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
        unique: true
    },
    direction: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    identification: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 10,
        unique: true
    },
    birthdate: {
        type: Date,
        required: true
    }
});

// Create user model
const User = mongoose.model('User', userSchema);

// Export user model
module.exports = User;



