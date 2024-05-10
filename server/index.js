const express = require('express')
const { connectMongoDB } = require('./connection')
const { logReqRes } = require('./middlewares')
const cors = require('cors')
const contactRouter = require('./routes/contact')
const otpRouter = require('./routes/otp')
const clientRouter = require('./routes/client/register')
const ballotRouter = require('./routes/ballot')
const candidateRouter = require('./routes/candidate')
const voterRouter = require('./routes/voter')
const sendmailRouter = require('./routes/sendmail')
const tokenRouter = require('./routes/token')
const adminRouter = require('./routes/admin')
const reviewRouter = require('./routes/review')
const publicRouter = require('./routes/public')
const voteRouter = require('./routes/vote')
const { middlePublic } = require('./middlewares/public')

const app = express()
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

connectMongoDB('mongodb://localhost:27017/E-VoteHub');

app.use(logReqRes('log.txt'));

app.use('/contact', contactRouter);
app.use('/sendotp', otpRouter);
app.use('/client', clientRouter);
app.use('/ballot', ballotRouter);
app.use('/candidate', candidateRouter);
app.use('/voter', voterRouter);
app.use('/sendmail', sendmailRouter);
app.use('/token', tokenRouter);
app.use('/admin', adminRouter);
app.use('/review', reviewRouter);
app.use('/vote', voteRouter);
app.use('/public', middlePublic, publicRouter);

app.listen(8080, () => {
    console.log("server is running")
})

