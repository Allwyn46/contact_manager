const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// FETCH ALL CONTACTS === GET
const allContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// FETCH SINGLE CONTACT === GET /api/contacts/:id
const singleContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not Found');
    }
    res.status(200).json(contact);
});

// CREATE NEW CONTACT === POST
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All Fields are Required!');
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

// UPDATE CONTACT === PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not Found');
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

// DELETE CONTACT === DELETE /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not Found');
    }
    const result = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
});

module.exports = {
    allContacts,
    createContact,
    singleContact,
    updateContact,
    deleteContact,
};
