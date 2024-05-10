const model = require('../modules/client/register')


async function middlePublic(req, res, next) {
    const api = req.header('api');
    const user = await model.findOne({ api_key: api })

    if (user) {
        next();
    } else {
        res.json({ erorr: 'Api not found' })
    }
}


module.exports = {
    middlePublic
}