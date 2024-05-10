const model = require('../../modules/ballot')

async function handleCreateBallot(req, res) {
    
    model.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleGetBallot(req, res) {
    model.find(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleUpdateBallot(req, res) {
    model.findByIdAndUpdate({ _id: req.body.id }, { ballot_name: req.body.ballot_name, max_vote: req.body.max_vote, min_vote: req.body.min_vote })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    handleGetBallot,
    handleCreateBallot,
    handleUpdateBallot
}

