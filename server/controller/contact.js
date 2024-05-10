const ContactModel = require('../modules/Contact')

async function handleGetContact(req, res) {
    ContactModel.find()
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
}

async function handlePostContact(req, res) {
    ContactModel.create(req.body)
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
}

module.exports = {
    handleGetContact,
    handlePostContact
}
