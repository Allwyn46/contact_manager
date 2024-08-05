const express = require('express');
const router = express.Router();
const {
    allContacts,
    createContact,
    updateContact,
    singleContact,
    deleteContact,
} = require('../controllers/contactController');

router.route('/').get(allContacts).post(createContact);

router
    .route('/:id')
    .get(singleContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;
