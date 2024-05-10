const model = require('../../modules/token')

async function handleCreateToken(req, res) {
    model.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleRemoveToken(req, res) {
    model.findOneAndUpdate({ token: req.body.token }, { status: false })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleGetToken(req, res) {
    model.findOne({ token: req.body.token })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    handleCreateToken,
    handleRemoveToken,
    handleGetToken
};


