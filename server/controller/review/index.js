const model = require('../../modules/review')

async function handleCreateReview(req, res) {

    model.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleGetReview(req, res) {
    model.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleUpdateReviewStats(req, res) {
    model.findByIdAndUpdate({ _id: req.body.id }, { status: req.body.status })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    handleGetReview,
    handleCreateReview,
    handleUpdateReviewStats
}

