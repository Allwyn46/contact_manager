const asyncHandler = require('express-async-handler');

// REGISTER NEW USER === POST api/users/register
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All Fields are Required!');
    }
    const registeredUser = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(registeredUser);
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
