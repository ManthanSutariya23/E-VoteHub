const model = require('../../modules/candidate')

async function handleCreateCandidate(req, res) {

    const user = await model.findOne(req.body);
    if (user) {
        return res.status(404).json({ error: 'Candidate Already Exist' });
    } else {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

async function handleGetCandidate(req, res) {
    const user = await model.find(req.body);
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleLogin(req, res) {
    const user = await model.findOne(req.body);
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateProfile(req, res) {
    
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { fname: req.body.fname, lname: req.body.lname, email: req.body.email, photo: req.body.photo, description: req.body.description })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateStatus(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { status: req.body.status })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdatePassword(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { password: req.body.password })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

module.exports = {
    handleCreateCandidate,
    handleGetCandidate,
    handleLogin,
    handleUpdateStatus,
    handleUpdatePassword,
    handleUpdateProfile
}

