const model = require('../../modules/vote')

async function handleCreateVote(req, res) {

    const user = await model.findOne({ voter_id: req.body.voter_id });
    if (user) {
        return res.status(404).json({ error: 'Vote Already Exist' });
    } else {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

async function handleCreateMultiVote(req, res) {

    const data = await model.insertMany(req.body.voting);

    return res.status(200).json({ status: data.acknowledged })
}

async function handleGetVote(req, res) {
    const user = await model.find(req.body);
    if (!user) return res.status(404).json({ error: 'Vote not found' })
    return res.json(user);
}

module.exports = {
    handleCreateVote,
    handleGetVote,
    handleCreateMultiVote,
}

