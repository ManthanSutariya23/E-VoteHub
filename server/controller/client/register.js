const model = require('../../modules/client/register')

async function handleGetClient(req, res) {

    model.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleRegisterClient(req, res) {
    model.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

async function handleLoginClient(req, res) {
    const user = await model.findOne(req.body)
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleCheckEmail(req, res) {
    const user = await model.findOne(req.body)
    if (user) return res.status(404).json({ error: 'User found' })
    return res.json({ message: "User not found" });
}

async function handleGetDetail(req, res) {
    const user = await model.findById(req.body.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateTitle(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { title: req.body.title })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdatePassword(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { password: req.body.password })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateResult(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { isresult: req.body.isresult })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateAgreement(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { agreement: req.body.agreement })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateProfile(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { client_name: req.body.client_name, email: req.body.email, logo: req.body.logo, address: req.body.address })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateReview(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { isreview: req.body.review })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

async function handleUpdateApiKey(req, res) {
    const user = await model.findByIdAndUpdate({ _id: req.body.id }, { api_key: req.body.api_key })
    if (!user) return res.status(404).json({ error: 'User not found' })
    return res.json(user);
}

module.exports = {
    handleGetClient,
    handleRegisterClient,
    handleCheckEmail,
    handleUpdateTitle,
    handleUpdateResult,
    handleUpdatePassword,
    handleGetDetail,
    handleUpdateAgreement,
    handleUpdateProfile,
    handleUpdateReview,
    handleUpdateApiKey,
    handleLoginClient
}
