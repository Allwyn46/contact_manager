const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// REGISTER NEW USER === POST api/users/register
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    // VALIDATION
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All Fields are Required!');
    }

    // CHECKING WHETHER THE EMAIL IS ALREADY REGISTERED
    const availableUser = await User.findOne({ email });

    if (availableUser) {
        res.status(400);
        throw new Error('User Already Registered');
    }

    // HASHING THE PASSWORD FOR SAFETY
    const hashedPass = await bcrypt.hash(password, 10);

    // REGISTERING THE USER
    const registeredUser = await User.create({
        username,
        email,
        password: hashedPass,
    });

    // RETURNING RESPONSE FOR SUCCESS AND ERROR
    if (registeredUser) {
        res.status(201).json({
            _id: registeredUser.id,
            email: registeredUser.email,
        });
    } else {
        res.status(400);
        throw new Error('User Data Not Valid');
    }
});

// LOGIN EXISTING USER === POST api/users/login
const loginUser = asyncHandler(async (req, res) => {
    res.json({ Bankai: 'Extend Hozikimaru' });
});

// LOGGED IN USER DETAILS === GET api/users/currentuser
const currentUser = asyncHandler(async (req, res) => {
    res.json({ Bankai: 'Tenza Zangetsu' });
});

module.exports = {
    registerUser,
    loginUser,
    currentUser,
};
