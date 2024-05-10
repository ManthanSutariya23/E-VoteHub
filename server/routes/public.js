const express = require('express')
const app = express()
const clientRouter = require('../controller/public/client')
const ballotRouter = require('../controller/public/ballot')
const candidateRouter = require('../controller/public/candidate')
const voterRouter = require('../controller/public/voter')
const sendmailRouter = require('../controller/public/mail')
const tokenRouter = require('../controller/public/token')
const voteRouter = require('../controller/public/vote')



app.use('/client', clientRouter);
app.use('/ballot', ballotRouter);
app.use('/candidate', candidateRouter);
app.use('/voter', voterRouter);
app.use('/sendmail', sendmailRouter);
app.use('/token', tokenRouter);
app.use('/vote', voteRouter);

module.exports = app;
