const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    currentUser,
} = require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/currentuser', currentUser);

module.exports = router;
