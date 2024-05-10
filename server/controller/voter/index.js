const model = require('../../modules/voter')

async function handleCreateVoter(req, res) {

    const user = await model.findOne({ 'email': req.body.email, 'client_id': req.body.client_id });
    if (user) {
        return res.status(404).json({ error: 'Voter Already Exist' });
    } else {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

async function handleGetVoter(req, res) {
    const user = await model.find(req.body);
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleGetVoterDetail(req, res) {
    const user = await model.findById(req.body.id).catch((e) => res.json(e));
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleCheckEmail(req, res) {
    const user = await model.findOne(req.body).catch((e) => res.json({ error: 'User found' }))
    if (user) return res.status(404).json({ error: 'User found' })
    return res.json({ message: "User not found" });
}

async function handleLoginVoter(req, res) {
    const user = await model.findOne(req.body);
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateVoter(req, res) {
    model.findByIdAndUpdate({ _id: req.body.id }, {
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        postcode: req.body.postcode,
        gender: req.body.gender,
    })
        .then(data => { res.json(data) })
        .catch(err => res.json(err))
}

async function handleUpdateVoterStatus(req, res) {
    model.findByIdAndUpdate({ _id: req.body.id }, {
        approved: req.body.approved
    })
        .then(data => { res.json(data) })
        .catch(err => res.json(err))
}

async function handleUpdatePassword(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { password: req.body.password })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

module.exports = {
    handleCreateVoter,
    handleUpdateVoter,
    handleUpdateVoterStatus,
    handleUpdatePassword,
    handleGetVoterDetail,
    handleLoginVoter,
    handleCheckEmail,
    handleGetVoter
}

