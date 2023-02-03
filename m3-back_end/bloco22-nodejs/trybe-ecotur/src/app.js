const express = require('express');
const activiesRouter = require('./routes/activitiesRoute');
const signUpRoute = require('./routes/signUpRoute');

const app = express();

app.use(express.json());

// Routes
app.use('/activities', activiesRouter);
app.use('/signup', signUpRoute);

module.exports = app;