const ballotModel = require('../../modules/ballot')
const candidateModel = require('../../modules/candidate')
const clientModel = require('../../modules/client/register')
const adminModel = require('../../modules/admin')
const reviewModel = require('../../modules/review')
const voterModel = require('../../modules/voter')
const contactModel = require('../../modules/Contact')
const model = require('../../modules/token')


async function handleLoginAdmin(req, res) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    let credential = '';
    for (let i = 0; i < 18; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        token += charset[randomIndex];
    }

    await adminModel.findOne(req.body)
        .then(data => {
            if (data) {
                model.create({ token: token, status: true })
                    .then(data => res.json(data))
                    .catch(err => res.status(404).json({ error: "Server Error" }))
            } else {
                return res.status(404).json({ error: "You are not verify" })
            }
        })
        .catch(err => res.json(err))
}

async function handleGetAdminData(req, res) {

    await model.findOne({ token: req.body.token })
        .then(data => {
            if (!data) res.json({ error: "You are not verify" })
            if (!data.status) res.json({ error: "Your token has been expired" })
        })
        .catch(err => { return res.status(404).json({ error: "token error" }) })

    let adminData = {
        ballot: {},
        candidate: {},
        client: {},
        review: {},
        voter: {},
        contact: {},
        admin: {}
    };

    await ballotModel.find()
        .then(data => adminData.ballot = data)
        .catch(err => adminData.ballot = err)

    await candidateModel.find()
        .then(data => adminData.candidate = data)
        .catch(err => adminData.candidate = err)

    await reviewModel.find()
        .then(data => adminData.review = data)
        .catch(err => adminData.review = err)

    await clientModel.find()
        .then(data => adminData.client = data)
        .catch(err => adminData.client = err)

    await contactModel.find()
        .then(data => adminData.contact = data)
        .catch(err => adminData.contact = err)

    await voterModel.find()
        .then(data => adminData.voter = data)
        .catch(err => adminData.voter = err)

    await adminModel.find()
        .then(data => adminData.admin = data)
        .catch(err => adminData.admin = err)

    if (!adminData) { res.status(404).json({ error: 'data not found' }) } else {
        res.json(adminData)
    }
}

async function handleGetAdminDataV2(req, res) {
    let adminData = {
        client: {}
    };

    await clientModel.find()
        .then(data => {
            adminData.client = data
            ballotModel.find({ client_id: data._id })
                .then(baldata => {
                    console.log('ballot')
                    adminData.client.ballot = baldata
                    candidateModel.find({ ballot_id: baldata._id })
                        .then(data => { adminData.candidate = data; console.log('candidate') })
                        .catch(err => adminData.candidate = err)
                })
                .catch(err => adminData.ballot = err)
        })
        .catch(err => adminData.client = err)

    if (!adminData) return res.status(404).json({ error: 'data not found' })

    return res.json(adminData)
}

async function handleEditPassword(req, res) {
    model.findByIdAndUpdate({ _id: req.body.id }, { password: req.body.password })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

module.exports = {
    handleGetAdminData,
    handleLoginAdmin,
    handleEditPassword,
    handleGetAdminDataV2
}

