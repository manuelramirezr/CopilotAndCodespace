// Create controller.js file in back/controllers/:

// Import model
const User = require('../models/User');

// Create user
exports.createUser = async (req, res) => {
    // Create user
    const user = new User(req.body);
    // Save user
    await user.save();
    // Response
    res.json({
        status: 'User saved'
    });
}

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}